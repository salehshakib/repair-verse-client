import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PageTitle from "../../Shared/Header/PageTitle/PageTitle";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`https://repair-verse.vercel.app/reviews?userId=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        console.log(myReviews);
      });
  }, [user?.uid, logOut, refresh, myReviews]);

  const handleDelete = (id) => {
    console.log("this is id", id);
    fetch(`https://repair-verse.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Successfully");
        setRefresh(!refresh);
      })
      .catch((error) => toast.error("Something Went Wrong."));
  };

  return (
    <div className="bg-base-200 pt-20">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <PageTitle title={"My Reviews"}></PageTitle>
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            User Reviews
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          {myReviews.length === 0 ? (
            <>
              <h2 className="text-center flex items-center justify-center text-4xl font-bold text-gray-600 min-h-[50vh]">
                No Reviews To Show
              </h2>
            </>
          ) : (
            <>
              <h2 className="lg:text-start text-center text-4xl font-bold text-gray-600 min-h-[50vh]">
                We Really Appriciate Your Feedback
              </h2>
            </>
          )}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
            {myReviews.map((myReview) => (
              <MyReviewCard
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReviewCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
