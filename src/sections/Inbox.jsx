import React from "react";

const Inbox = () => {
  return (
    <section className=" font-montserrat text-slate-gray w-[80%] mx-auto mb-20">
      <div className=" text-2xl mb-5">
        New Messages <span className="text-blue-400">2</span>
      </div>
      <div className="flex justify-items-center justify-between p-10 bg-slate-100 rounded-lg">
        <div>
          <p className=" font-bold">Name</p>
          <p className="text-blue-400">Bright Ohakim</p>
          <p className="text-blue-400">John Nwakam</p>
          <p>Judge Orwell</p>
        </div>
        <div>
          <p className=" font-bold">Subject</p>
          <p className="text-blue-400">Working opportunity</p>
          <p className="text-blue-400">I sent the account details</p>
          <p>Review the blog</p>
        </div>
        <div>
          <p className=" font-bold">Date</p>
          <p className="text-blue-400">December 4th, 2023, 3:19 PM</p>
          <p className="text-blue-400">November 10th, 2023, 5:02 PM</p>
          <p>October 2nd, 2023, 10:45 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Inbox;
