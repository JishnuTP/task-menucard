import React from 'react';

const InfoSections = () => {
    return (
        <div className="mt-8 bg-black p-8 min-h-fill">
            <div className="container bg-yellow-800 mx-auto  p-6 border border-gray-600 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
                    <div className=" p-4 rounded-lg  flex-1 mb-4 md:mb-0">
                        {/* <h2 className="text-lg font-bold mb-2">Section 1</h2> */}
                        <p className="text-gray-300">Food may not be refunded. If your food was made incorrectly we will remake it for you.</p>
                    </div>
                    <div className=" p-4 rounded-lg flex-1 mb-4 md:mb-0">
                        {/* <h2 className="text-lg font-bold mb-2">Section 2</h2> */}
                        <p className="text-gray-300">18% service charge will be added to all checks over $100.</p>
                    </div>
                    <div className="700 p-4 rounded-lg flex-1">
                        {/* <h2 className="text-lg font-bold mb-2">Section 3</h2> */}
                        <p className="text-gray-300">Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSections;
