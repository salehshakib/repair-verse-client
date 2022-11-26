import React from "react";

const Blog = () => {
  return (
    <div className="bg-base-200 pt-20">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-black capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Question Answer
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
          </div> */}
          <div className="mx-auto text-2xl">
            <div className="my-3 ">
              <h2 className="font-medium py-5">
                <span className="font-semibold pr-2 text-black">
                  Question 1:
                </span>
                What is the difference between SQL and NoSQL?
              </h2>
              <h2 className="text-base font-normal">
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable. SQL databases are table-based, while
                NoSQL databases are document, key-value, graph, or wide-column
                stores. SQL databases are better for multi-row transactions,
                while NoSQL is better for unstructured data like documents or
                JSON.
              </h2>
            </div>
            <div className="my-3">
              <h2 className="font-medium py-5">
                <span className="font-semibold text-black pr-2">
                  Question 2:
                </span>
                What is JWT, and how does it work?
              </h2>
              <h2 className="text-base font-normal">
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                transmitting information between parties as JSON object. It is
                compact, readable and digitally signed using a private key/ or a
                public key pair by the Identity Provider(IdP).
                <br />
                The purpose of using JWT is not to hide data but to ensure the
                authenticity of the data. JWT is signed and encoded, not
                encrypted. JWT is a token based stateless authentication
                mechanism. Since it is a client-side based stateless session,
                server doesn't have to completely rely on a datastore(database)
                to save session information.
              </h2>
            </div>
            <div className="my-3">
              <h2 className=" font-medium py-5">
                <span className="font-semibold text-black pr-2">
                  Question 3:
                </span>
                What is the difference between javascript and NodeJS?
              </h2>
              <h2 className="text-base font-normal">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language. It requires
                libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.
              </h2>
            </div>
            <div className="my-3">
              <h2 className=" font-medium py-5">
                <span className="font-semibold text-black pr-2">
                  Question 4:
                </span>
                How does NodeJS handle multiple requests at the same time?
              </h2>
              <h2 className="text-base font-normal">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
