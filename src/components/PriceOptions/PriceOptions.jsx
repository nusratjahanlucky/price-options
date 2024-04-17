import PriceOption from "../PriceOption/PriceOption";

 

const PriceOptions = () =>{
     const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "Limited group fitness classes",
            "Discounts on gym merchandise"
          ],
          "price": "$30/month"
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Personal training session (1/month)",
            "Nutritional consultation",
            "Free access to gym events"
          ],
          "price": "$50/month"
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "features": [
            "24/7 gym access",
            "Access to sauna and steam room",
            "Towel service included",
            "Personal locker",
            "Complimentary drinks at gym cafe"
          ],
          "price": "$80/month"
        }
      ];
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
             <div className="grid md:grid-cols-3 gap-6">
                {
                  priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
             </div>
        </div>
    );
};

export default PriceOptions;