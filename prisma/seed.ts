import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear any existing data
  await prisma.skill.deleteMany();
  await prisma.socialLink.deleteMany();
  await prisma.project.deleteMany();
  await prisma.teamMember.deleteMany();

  // 1. Create Felopater Remon
  const felopater = await prisma.teamMember.create({
    data: {
      name: 'Felopater Remon',
      role: 'Full Stack Developer (ASP.NET Core & React)',
      location: 'Cairo, Egypt',
      bio: 'Highly motivated Full Stack Developer specializing in building secure, scalable web applications. Strong background in ASP.NET Core, React, and software architecture. Passionate about performance, usability, and modern development standards.',
      yearsExperience: 2,
      profileImageUrl: null,
      skills: {
        create: [
          { name: 'ASP.NET Core', category: 'Backend' },
          { name: 'C#', category: 'Backend' },
          { name: 'React', category: 'Frontend' },
          { name: 'Angular', category: 'Frontend' },
          { name: 'SQL Server', category: 'Database' },
          { name: 'Flutter (basic)', category: 'Mobile' },
          { name: 'Software Architecture', category: 'Concepts' },
          { name: 'Team Leadership', category: 'Strengths' },
          { name: 'Problem Solving', category: 'Strengths' },
        ],
      },
      socialLinks: {
        create: [
          { platform: 'GitHub', url: 'https://github.com/' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/' },
        ],
      },
      projects: {
        create: [
          {
            title: 'ChatLink',
            shortDesc: 'Real-time chat system',
            description: 'A powerful real-time messaging platform.',
            category: 'Web Application',
            technologies: 'React, ASP.NET Core, SignalR',
            results: 'Enabled real-time chat with minimal latency',
          },
          {
            title: 'PharmaFlow',
            shortDesc: 'Drug tracking system',
            description: 'End-to-end logistics and tracking for pharmaceutical drugs.',
            category: 'Enterprise Platform',
            technologies: 'Angular, SQL Server, ASP.NET Core',
            results: 'Eliminated tracking errors by 90%',
          },
          {
            title: 'Truck Tracking System',
            shortDesc: 'Live tracking with maps',
            description: 'GPS based live truck tracking.',
            category: 'Mobile & Web',
            technologies: 'React Native, Flutter, C#',
            results: 'Improved dispatch efficiency',
          },
        ],
      },
    },
  });

  // 2. Create Noha Muhammed El-Sayed
  const noha = await prisma.teamMember.create({
    data: {
      name: 'Noha Muhammed El-Sayed',
      role: 'Software Developer',
      location: 'Remote',
      bio: 'Aspiring Software Developer passionate about building real-world applications and solving meaningful problems. Focused on creating scalable systems and continuously improving technical skills across full-stack development.',
      yearsExperience: 3,
      profileImageUrl: null,
      skills: {
        create: [
          { name: 'C#, C++, Java', category: 'Languages' },
          { name: 'JavaScript, Dart', category: 'Languages' },
          { name: 'React.js', category: 'Frontend' },
          { name: 'Node.js, Express.js', category: 'Backend' },
          { name: 'MERN Stack', category: 'Full Stack' },
          { name: 'MongoDB, Mongoose', category: 'Databases' },
          { name: 'Automation Testing', category: 'Testing' },
          { name: 'Agile, Scrum', category: 'Methodologies' },
          { name: 'Git, VS Code', category: 'Tools' },
        ],
      },
      socialLinks: {
        create: [
          { platform: 'GitHub', url: 'https://github.com/' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/' },
        ],
      },
      // Note: Noha didn't specify projects in the prompt, so we won't add specific projects to her yet.
    },
  });

  console.log('Database seeded with Felopater and Noha profiles!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
