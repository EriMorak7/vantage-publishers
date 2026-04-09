import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const signature = request.headers.get('x-paystack-signature');
    if (!signature) {
      return NextResponse.json({ error: 'Missing Paystack signature' }, { status: 400 });
    }

    const payload = await request.text();
    const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY as string).update(payload).digest('hex');

    if (hash !== signature) {
      return NextResponse.json({ error: 'Invalid Paystack signature' }, { status: 400 });
    }

    const body = JSON.parse(payload);
    const event = body.event;
    
    if (event === 'charge.success') {
      const data = body.data;
      const orderRef = data.reference;

      // Find the order using Paystack Ref
      const order = await prisma.order.findUnique({
        where: { paystackRef: orderRef },
        include: { items: true }
      });

      if (order) {
        // Mark order as PAID
        await prisma.order.update({
          where: { id: order.id },
          data: { status: 'PAID' }
        });

        // Deduct inventory sequentially
        for (const item of order.items) {
           if (item.format === 'paperback') {
              // We could check if it's instock and decrement a stock count if we tracked it loosely
           }
        }
      }
    }

    return NextResponse.json({ status: 'success' }, { status: 200 });

  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
