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
              <h4 className={styles.company}>The Research Foundation for SUNY</h4>
              <h4 className={styles.role}>Software Engineer</h4>
              <p className={styles.description}>
                ⦿ &nbsp; &nbsp; Created a Docker-based workbench, streamlining the development process by creating a consistent and reproducible environment, which reduced setup time and improved team productivity.
                <br></br>
                ⦿ &nbsp; &nbsp; Automated the process of combining the healthcare data from multiple relational databases and staged the data to standard OHDSI format using Spark to facilitate the faster modeling experiments.
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
                  <h4 className={styles.role}>Software Engineer</h4>
                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Developed a scalable JupyterLab environment hosted on AWS and built RESTful APIs in Python to provision AWS EC2, EMR
clusters, enhancing the modeling journey for 1000+ ML modelers and enabling efficient distributed AI/ML workloads.<br/><br/>
                    ⦿ &nbsp; &nbsp; Designed and created Postgre database with optimized schema for efficient storage of AWS log data and created an interactive
dashboard using Kibana for visualizing usage KPIs, enabled real-time cost monitoring and management.<br/><br/>
                    ⦿ &nbsp; &nbsp; Built a recommendation system by creating multi-class classification XGBoost model that suggests the optimal AWS clusters based
on user inputs, resulting in saving $25,000 quarterly through optimized cluster usage.<br/><br/>
                    ⦿ &nbsp; &nbsp; Optimized cloud resources utilization by deploying Nvidia RAPIDS on AWS, enabling complex models to run entirely on GPUs,
leveraged Dask clusters on Amazon EKS and ECS.<br/><br/>
                    ⦿ &nbsp; &nbsp; Spearheaded the migration of over 30 AI/ML models to CUDA programming for distributed GPU computing, improving the model
training time by ∼70x, which led to the faster development and experiments.<br/>
                    ⦿ &nbsp; &nbsp; Implemented dynamic resource allocation controls for Jupyter notebook sessions using Unix shell scripting with Bash, optimizing
compute resource distribution across a multi-tenant environment and ensuring equitable access for over 3,400 users.<br/>
                  </p>
                </div>
              </div>
  
              <div className={styles.bullet}>
                <div className={styles.dotSecondary}>
                  <div className={styles.dotCore}/>
                </div>
                <div className={styles.info}>
                  <p className={styles.time}>July 2021 - Dec 2021</p>
                  <h4 className={styles.role}>Software Engineer</h4>

                  <p className={styles.description}>
                    ⦿ &nbsp; &nbsp; Leveraged React, Node, MySQL to develop a model deployment platform, maintained security measures and compliance protocols, including HTTP and OAuth for secure API access, significantly enhancing the user experience.<br/><br/>
                    ⦿ &nbsp; &nbsp; Developed backend CI/CD pipelines for machine learning models deployment in Kubernetes using docker and helm, reduced the effort spent on onboarding a new model deployments by 70%.<br/><br/>
                    ⦿ &nbsp; &nbsp; Revamped HiveQL queries to optimize the data pipelines for usecases like customer segmentation, marketing, fraud detection by using indexed views, table partitioning, optimized joins and subqueries, improved the execution time by 20%.
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
                ⦿ &nbsp; &nbsp; Utilized Python, Django, MongoDB and AWS SDKs for robust backend development and integration.
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
