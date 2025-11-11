import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [
    {
        id : '1',
        delievryDays: 7,
        priceCents: 0
    },
    {
        id : "2",
        delievryDays: 3,
        priceCents: 499
    },
    {
        id : '3',
        delievryDays: 1,
        priceCents: 999
    }
]

export function getDeliveryOption(deliveryOptionId){
    let delievryOption;

        deliveryOptions.forEach((option)=>{
            if(option.id === deliveryOptionId){
                delievryOption = option;
            }
        });

    return delievryOption || delievryOption[0];
}

export function calculateDeliveryDate(deliveryOption){
    const today = dayjs();
    const delievryDate = today.add(
        deliveryOption.delievryDays,
        'days'
    );

    const dateString =  delievryDate.format('dddd, MMMM D');
    return dateString;
}