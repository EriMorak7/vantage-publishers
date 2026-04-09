import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export async function POST(request: Request) {
  try {
    const session = await auth();
    const body = await request.json();
    const { items, email, name, address } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 });
    }

    // 1. Calculate actual price from the DB to prevent client-side manipulation
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of items) {
      const book = await prisma.book.findUnique({ where: { id: item.bookId } });
      if (!book) return NextResponse.json({ error: `Book ${item.bookId} not found` }, { status: 400 });
      
      const itemTotal = book.price * item.quantity;
      totalAmount += itemTotal;
      
      orderItems.push({
        bookId: book.id,
        quantity: item.quantity,
        format: item.format,
        priceAt: book.price
      });
    }

    const taxAmount = totalAmount * 0.075;
    const shippingFee = 1500;
    const finalAmount = totalAmount + taxAmount + shippingFee;

    // 2. Generate a unique reference
    const paystackRef = `VP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // 3. Create the pending order in the database
    const order = await prisma.order.create({
      data: {
        userId: session?.user?.id || null,
        guestEmail: !session?.user ? email : null,
        guestName: !session?.user ? name : null,
        totalAmount: finalAmount,
        taxAmount,
        shippingFee,
        paystackRef,
        status: 'PENDING',
        street: address.street,
        city: address.city,
        state: address.state,
        items: {
          create: orderItems
        }
      }
    });

    // 4. Initialize Paystack Transaction (Stubbed out API call)
    /* 
    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: session?.user?.email || email,
        amount: Math.round(finalAmount * 100), // Paystack uses kobo
        reference: paystackRef,
        callback_url: `${process.env.AUTH_URL}/checkout/success`,
      })
    });
    
    const paystackData = await paystackResponse.json();
    return NextResponse.json({ authorization_url: paystackData.data.authorization_url });
    */

    // For now, return a mock success
    return NextResponse.json({ 
      orderId: order.id, 
      paystackRef,
      mock_authorization_url: `${process.env.AUTH_URL}/checkout/success?reference=${paystackRef}` 
    }, { status: 200 });

  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Checkout initialization failed' }, { status: 500 });
  }
}
