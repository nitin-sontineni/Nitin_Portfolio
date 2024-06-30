import College from "@/components/College";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ConstrainedTitle } from "@/components/SectionTitle";
import styles from "./Education.module.css";

const COLLEGES = [
    {
        degree: "Master of Science in Computer Science",
        school: "SUNY - Stony Brook University, New York",
        courses: [
            "Data Science",
            "Advanced Machine Learning",
            "Data Visualization",
            "Computer Vision",
            "Advanced Operating Systems",
            "Generative AI"
        ],
        start: "Aug 2023",
        end: "Dec 2024(Expected)",
        gpa: "3.5/4",
        imgSrc: "/images/sbu.jpg",
    },
    {
        degree: "Bachelor of Engineering in Computer Science",
        school: "Birla Institute of Technology and Science, Pilani, India",
        courses: [
            "Data Structures & Algorithms",
            "Object Oriented Programming",
            "Database Management",
            "Operating Systems",
            "Machine Learning",
            "Deep Learning",
            "Information Retrieval"
        ],
        start: "Aug 2018",
        end: "May 2022",
        gpa: "8.1/10",
        imgSrc: "/images/bits.jpg",
    },
];

const Education: React.FC = () => {
  return (
    <div className={styles.education}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Education</ConstrainedTitle>
        <div className={styles.collegeList}>
          <College {...COLLEGES[0]} side="left" />
          <College {...COLLEGES[1]} side="right" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Education;
