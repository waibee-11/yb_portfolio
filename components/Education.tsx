import EducationCard from "./EducationCard";
import EducationCard2 from "./EducationCard2";

export default function Education(){
    return (
        <div className="pt-16 pb-32 gap-20 flex justify-center mx-20 flex-wrap">
            <EducationCard program="Bachelor of Computer Science with Specialization in AI" uni="University of Waterloo" courses="Object Oriented Programming, Data Structures, Algorithms, Operating Systems, Machine Learning, Artifical Intelligence, Calculus, Linear Algebra, Statistics, Probability" />
            <EducationCard program="Bachelor of Business Administration with Finance Major" uni="Wilfrid Laurier University" courses="Financial Instruments, Entrepreneurial Finance, International Finance, Equity Analysis, Business Analytics, Accounting, Marketing, Organizational Behaviour, Supply Chain Management" />
        </div>
    )
}