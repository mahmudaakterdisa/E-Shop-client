import React from 'react';

const NewCatalog = () => {
    return (
        <div className=' flex max-sm:flex-col justify-around max-sm:gap-12 max-sm:items-center  my-20'>
            <div className="card card-compact max-sm:w-3/6 sm:w-3/12 bg-base-100 shadow-xl">
                <figure><img className='h-48 w-full' src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4976.jpg?w=826&t=st=1672971058~exp=1672971658~hmac=09d7efaeff8356fec0e39ddb57b9ba4621fcd7de1915fd33a287bfa069417ab8" alt="Men" /></figure>

                <div className="card-body">
                    <h2 className="card-title">Men Winter Jacket</h2>

                </div>
            </div>
            <div className="card card-compact sm:w-3/12 max-sm:w-3/6 bg-base-100 shadow-xl">

                <figure><img className='w-full h-48' src="https://img.freepik.com/free-photo/beautiful-women-friends-together-isolated-yellow-background-black-yellow-dress-hat_285396-10936.jpg?w=996&t=st=1672970857~exp=1672971457~hmac=448a9e496d0c0ab5d9bcc79faf7a703751dce649a0276518f495561556f9b74e" alt="women" /></figure>

                <div className="card-body">
                    <h2 className="card-title">Women Long Black Dress</h2>

                </div>
            </div>
            <div className="card card-compact sm:w-3/12 max-sm:w-3/6 bg-base-100 shadow-xl">

                <figure><img className='w-full h-48' src="https://img.freepik.com/free-photo/cute-girl-eating-popcorn_1303-13216.jpg?w=996&t=st=1672970993~exp=1672971593~hmac=ad653162027b29d54aa82bce1402e0018669f60a7f4fbfeee37a030562dc8721" alt="kids" /></figure>

                <div className="card-body">
                    <h2 className="card-title">kids Jacket</h2>

                </div>
            </div>
        </div>
    );
};

export default NewCatalog;