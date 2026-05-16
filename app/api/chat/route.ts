import { cvContent } from '@/lib/cv';

const truthy = (value: string | undefined | null) => !!value;

const answers = [
  {
    matcher: /(nastp|financial data analyst|swe intern|powerbi|webapp|revenue model|top executives|digitiz|manual handling|data sources)/i,
    answer:
      'At NASTP Silicon, I built PowerBI and web application dashboards for top executives to turn fragmented operational data into clear, actionable insights. I also aggregated multiple data sources into a revenue model and digitized previously manual, bottlenecked workflows, which helped improve financial visibility and decision making.',
  },
  {
    matcher: /(virtual world|ibex|data analyst intern|employee retention|metabase|superset|dockeriz|data pipelines|bi reporting|analytical data)/i,
    answer:
      'At Virtual World (ibex.co), I worked as a Data Analyst Intern building and streamlining data pipelines with Docker, and creating an Employee Retention Dashboard using Metabase and Superset. I focused on turning HR analytics into actionable management insights while learning BI reporting best practices under a senior data scientist.',
  },
  {
    matcher: /(freelance|web developer|custom web|interactive user interface|remote)/i,
    answer:
      'As a freelance web developer, I delivered custom web solutions and interactive interfaces tailored to client needs. This role strengthened my front-end development skills and taught me how to translate business requirements into polished web experiences.',
  },
  {
    matcher: /(extracurricular|3d developer|benchmarksims|benchmark sims|volunteer|director tech|giki science society|graphic design|branding|videography|training sessions)/i,
    answer:
      'Outside of academics, I volunteer as a 3D developer and artist with BenchMark Sims, working on aircraft simulation tooling and high-fidelity modeling. I also served as Director Tech for the GIKI Science Society, where I led teams in graphic design, branding, and videography while training future members.',
  },
  {
    matcher: /(skill|skills|technology|technologies|tool|tools|tech stack|tooling)/i,
    answer:
      'I combine programming, analytics, BI, and data engineering skills. I use Python and SQL for data processing, R for statistical work, HTML/CSS and C++ for software development, and BI tools like Power BI, Looker, Metabase, and Superset to build dashboards. I also leverage Docker, Apache Spark, Airflow, and ETL practices to manage data pipelines and improve data delivery.',
  },
  {
    matcher: /(experience|intern|work|company|role|position|job|project experience)/i,
    answer:
      'I have worked as a Financial Data Analyst and SWE Intern at NASTP Silicon, a Data Analyst Intern at Virtual World (ibex.co), and as a freelance web developer. I also completed a Data Science degree from GIKI and delivered analytics dashboards, ETL pipelines, and data-driven business solutions.',
  },
  {
    matcher: /(project|projects|dashboard|pipeline|analysis|reservation system|final year|lithium|pakwheels|airbnb)/i,
    answer:
      'I have built several projects including a Lithium-Ion battery state of health analytics dashboard, a PakWheels ETL pipeline, an AirBnB market analysis dashboard, and a Bus Ticket Reservation System.',
  },
  {
    matcher: /(education|degree|school|university|giki|certificate|qualification)/i,
    answer:
      'I studied Data Science at Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) and completed my Higher Secondary School Certificate at Fazaia Model Inter College Mushaf and Secondary School Certificate at Fazaia Inter College Minhas.',
  },
  {
    matcher: /(award|awards|certificate|certificates|achievement|recognition)/i,
    answer:
      'I earned first position regionally in the Punjab ICATS Science Contest and received a Certificate of Appreciation at the GIKI Career Fair 2022.',
  },
  {
    matcher: /(interest|interests|hobby|hobbies|golf|swim|swimming|sim development|3d|volunteer|benchmarksims)/i,
    answer:
      'I enjoy golf, swimming, sim development, and 3D art. I also volunteer with BenchMark Sims on aircraft simulation tooling and modeling.',
  },
  {
    matcher: /(contact|email|linkedin|github|portfolio)/i,
    answer:
      'You can reach me at hamdankhanofc@gmail.com, view my LinkedIn at linkedin.com/in/hamdan-khan-15273b258, and GitHub at github.com/hamdankhan1208.',
  },
];

function parseSections(text: string) {
  const lines = text.split(/\r?\n/);
  const sections: Record<string, string> = {};
  let currentSection = 'Overview';
  let buffer: string[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (line === line.toUpperCase() && line.length > 1 && !line.startsWith('•')) {
      if (buffer.length) {
        sections[currentSection] = buffer.join(' ').trim();
      }
      currentSection = line;
      buffer = [];
    } else {
      buffer.push(line);
    }
  }

  if (buffer.length) {
    sections[currentSection] = buffer.join(' ').trim();
  }

  return sections;
}

function findBestSectionAnswer(question: string) {
  const query = question.toLowerCase();
  const sectionMap = parseSections(cvContent);
  const queryWords = query.match(/\w+/g) || [];

  let bestScore = 0;
  let bestContent = '';

  for (const [title, content] of Object.entries(sectionMap)) {
    let score = 0;
    if (title.toLowerCase().includes(query)) {
      score += 3;
    }

    for (const word of queryWords) {
      if (title.toLowerCase().includes(word)) score += 4;
      if (content.toLowerCase().includes(word)) score += 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestContent = `${title}: ${content}`;
    }
  }

  return bestScore >= 2 ? bestContent : null;
}

function getAnswer(question: string) {
  for (const item of answers) {
    if (item.matcher.test(question)) {
      return item.answer;
    }
  }

  const sectionAnswer = findBestSectionAnswer(question);
  if (sectionAnswer) {
    return sectionAnswer;
  }

  return 'I could not find a direct answer in the CV. Please try asking about skills, experience, projects, education, awards, or interests.';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    if (messages.length === 0) {
      return Response.json({ error: 'No message received' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user' || !truthy(lastMessage.content)) {
      return Response.json(
        { error: 'Invalid user message' },
        { status: 400 }
      );
    }

    const answer = getAnswer(lastMessage.content);

    return Response.json({
      message: answer,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
