import React from "react";

const Message = () => {
  return (
    <section className=" mb-20 w-[60%] mx-auto text-slate-gray">
      <div className="bg-slate-100 p-20 rounded-lg mb-3">
        <div className=" text-2xl mb-2">
          <p>Working opportunity for a website company</p>
        </div>
        <div className="mb-10">
          <p className=" text-blue-500">Samuel Judge</p>
          <p>December 4th, 2023, 2:34 PM</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          consequatur ipsam ea corrupti vel quas accusamus autem placeat
          temporibus non natus obcaecati, quidem reiciendis doloremque eum
          laboriosam? Quo, praesentium ullam? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fuga earum temporibus magni architecto
          quisquam itaque reiciendis labore consectetur nemo quo, id error
          doloribus tenetur amet nesciunt molestiae dignissimos consequatur
          eligendi.
        </div>
      </div>
      <div className=" space-x-4">
        <span className=" cursor-pointer text-lg text-green-500">Reply</span>
        <span className=" cursor-pointer text-lg text-red-500">Delete</span>
      </div>
    </section>
  );
};

export default Message;
