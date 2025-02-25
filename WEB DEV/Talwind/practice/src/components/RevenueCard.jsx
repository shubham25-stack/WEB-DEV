export const RevenueCard = ({ title, orderCount, amount }) => {
    return (
      <div className="bg-white rounded shadow-sm p-4">
        <div className="text-gray-700">
         
          {title && <h3>{title}</h3>}
        </div>
        <div className="flex justify-between">
          <div>
            ₹ {amount}
          </div>
          {orderCount ? (
            <div>
              {orderCount} order(s) 
              {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg>}
            </div>
          ) : null}
          
        </div>
      </div>
    );
  };
  