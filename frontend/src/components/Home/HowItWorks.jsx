import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How TalentHub Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up and create your account in minutes. It's simple,
                easy, and free! Once registered, you'll have access to a wide
                range of features and opportunities.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Browse through our extensive list of job listings to find the
                perfect opportunity that matches your skills and interests. If
                you're an employer, you can also post job openings to attract
                qualified candidates.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for jobs that interest you and showcase your qualifications
                and experience to potential employers. Employers can also review
                applications and recruit suitable candidates to fill their job
                vacancies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
