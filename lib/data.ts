import blogDown from "@/public/blogDown.jpg";
import codePenClone from "@/public/codePenClone.jpg";
import easyResume from "@/public/easyResume.jpg";
import eduguardian from "@/public/eduguardian.jpg";
import indigo from "@/public/indigo.jpg";
import mlAlgoVisualiser from "@/public/mlAlgoVisualiser.jpg";
import moviehut from "@/public/moviehut.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [
  {
    title: "Lithium-Ion Battery State of Health Estimation",
    description:
      "Built a predictive analytics solution for battery degradation trends using real-time sensor data and ML models.",
    tags: ["Python", "FastAPI", "React", "Arduino"],
    imageUrl: mlAlgoVisualiser,
    githubUrl: '',
    liveUrl: ''
  },
  {
    title: "PakWheels ETL Pipeline",
    description:
      "Containerized an end-to-end data pipeline with Docker Compose, processed raw data via Apache Spark, and stored optimized Parquet files to reduce query latency.",
    tags: ["Docker", "Apache Spark", "Airflow", "Parquet"],
    imageUrl: blogDown,
    githubUrl: '',
    liveUrl: ''
  },
  {
    title: "AirBnB Market Analysis",
    description:
      "Created a client-driven Power BI dashboard to surface market trends and actionable insights, supported by Python and Excel data preparation.",
    tags: ["Power BI", "Python", "Excel"],
    imageUrl: eduguardian,
    githubUrl: '',
    liveUrl: ''
  },
  {
    title: "Bus Ticket Reservation System",
    description:
      "Developed a secure reservation system using DBMS concepts with SQL, Python, and Excel to manage bookings and reporting workflows.",
    tags: ["Python", "SQL", "DBMS"],
    imageUrl: easyResume,
    githubUrl: '',
    liveUrl: ''
  },
] as const;
