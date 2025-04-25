import React, { useEffect, useRef } from 'react';

export default function PayPal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                value: '20.00', 
                currency_code: 'USD', 
              },
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);  
      },
      onError: (err) => {
        console.error(err);  
      },
    }).render(paypal.current); 
  }, []);

  return <div ref={paypal}></div>; 
}
