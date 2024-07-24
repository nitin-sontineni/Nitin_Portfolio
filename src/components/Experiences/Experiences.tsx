import { ConstrainedTitle } from "@/components/SectionTitle";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences: React.FC = () => {
  return (
    <div className={styles.experiences}>
      <MaxWidthWrapper>
        <ConstrainedTitle side="left">Experiences</ConstrainedTitle>
        <div className={styles.items}>
          <div className={styles.timeline}/>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={100}
                src="/images/suny_rf.jpg"
                alt="SBU"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  height={100}
                  width={100}
                  className={styles.mobileImage}
                  src="/images/suny_rf.jpg"
                  alt="SBU"
              ></Image>
              <p className={styles.time}>Jun 2024 - Present</p>
              <h4 className={styles.company}>SUNY Research Foundation</h4>
              <h4 className={styles.role}>Data Engineer</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Created data pipelines to combine the healthcare data from multiple sources into a common data model using Kafka and PySpark.
                <br></br>
                ⦿ &nbsp; &nbsp; Analyzing clinical characteristics of patients with cancer to optimize surgery waiting times using OHDSI Method Libraries in R.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <Image
                height={100}
                width={100}
                className={styles.image}
                src="/images/Amex.svg"
                alt="American Express"
            ></Image>
            <div className={styles.connector}/>
            <div className={styles.infos}>
              <div className={styles.bullet}>
                <div className={styles.dotPrimary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <Image
                      className={styles.mobileImage}
                      height={100}
                      width={100}
                      src="/images/Amex.svg"
                      alt="American Express"
                  ></Image>
                  <p className={styles.time}>July 2022 - July 2023</p>
                  <h4 className={styles.company}>American Express</h4>
                  <h4 className={styles.role}>Data Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed a scalable JupyterLab environment hosted on AWS and built RESTful APIs in Python to provision AWS EC2, EMR
clusters, enhancing the modeling journey for 500+ ML modelers and enabling efficient distributed AI/ML workloads.<br/><br/>
                    ⦿ &nbsp; &nbsp; Designed and created Postgre database with optimized schema for efficient storage of AWS log data and created an interactive
dashboard using Tableau for visualizing usage KPIs, enabled real-time cost monitoring and management.<br/><br/>
                    ⦿ &nbsp; &nbsp; Built a recommendation system by creating multi-class classification XGBoost model that suggests the optimal AWS clusters based
on user inputs, resulting in saving $25,000 quarterly through optimized cluster usage.<br/><br/>
                    ⦿ &nbsp; &nbsp; Revamped Hive queries and Optimized the data pipelines for usecases like customer segmentation, loyalty programs success, fraud
detection by using indexed views, table partitioning, optimized joins and subqueries, achieved 20% improvement in retrieval time.<br/><br/>
                    ⦿ &nbsp; &nbsp; Spearheaded the migration of over 30 AI/ML models to CUDA programming for distributed GPU computing, improving the model
training time by ∼70x, which led to the faster development and experiments..<br/>
                  </p>
                </div>
              </div>
  
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>July 2021 - Dec 2021</p>
                  <h4 className={styles.role}>Data Analyst</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Created CI/CD pipelines for machine learning models deployment in Kubernetes using docker and helm, reduced the effort spent onboarding a new model deployments by 70%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Developed a PoC for Model Retraining and integrated into deployment pipeline for auto-retraining of deployed models by creating a ETL pipeline using Kafka, reduced the manual intervention and increased operational efficiency.
                    <br/>

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={150}
                src="/images/Strandlogo.png"
                alt="Strand"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={150}
                  src="/images/Strandlogo.png"
                alt="Strand"
              />
              <p className={styles.time}>May 2021 - July 2021</p>
              <h4 className={styles.company}>Strand Life Sciences</h4>
              <h4 className={styles.role}>
                Software Development Intern
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Developed a cloud-based software hosted on AWS EC2, enabling scalable compute for analysis of large-scale Next Generation Sequencing data.
                <br/>
                <br/>
                ⦿ &nbsp; &nbsp; Automated result export to designated AWS S3 buckets, optimizing data management and cost efficiency.
                <br/><br/>
                ⦿ &nbsp; &nbsp; Implemented auto-termination of EC2 instances post-job completion, enhancing resource utilization.
                <br/><br/>
                ⦿ &nbsp; &nbsp; Utilized Python, Django, and AWS SDKs for robust backend development and integration.
                <br/>
              </p>
            </div>
          </div>

        <div className={styles.item}>
            <Image
                className={styles.image}
                height={100}
                width={150}
                src="/images/TIBIL_Logo.png"
                alt="TIBIL"
            />
            <div className={styles.dotPrimary}>
              <div className={styles.dotCore}/>
            </div>
            <div className={styles.connector}/>
            <div className={styles.info}>
              <Image
                  className={styles.mobileImage}
                  height={100}
                  width={150}
                  src="/images/TIBIL_Logo.png"
                  alt="TIBIL"
              />
              <p className={styles.time}>May 2020 - July 2020</p>
              <h4 className={styles.company}>TIBIL Solutions</h4>
              <h4 className={styles.role}>
                Data Science Intern
              </h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Engineered a Hybrid ARIMA-BiLSTM wind power forecasting model with PyTorch utilizing 40GB of wind turbine timeseries data,
achieved 7.2% MAPE. 
                  <br/><br/>
                ⦿ &nbsp; &nbsp; Transformed wind turbine data using SQL, segmenting data by temporal and environmental factors.
                <br/>
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};


export default Experiences;
