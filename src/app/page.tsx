import { Button } from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { ShadowHeading } from '@/components/ShadowHeading';
import { Text } from '@/components/Text';
import {
	Project,
	ProjectDescription,
	ProjectImage,
	ProjectTitle,
	ProjectTool,
	ProjectTools,
} from '@/components/project';
import { Metadata } from 'next';
import pulsateLight from '../../public/pulsate-light.png';
import pulsateDark from '../../public/pulsate-dark.png';
import devslistLight from '../../public/devslist-light.png';
import devslistDark from '../../public/devslist-dark.png';
import commonwealth from '../../public/commonwealth.jpg';
import coursehawk from '../../public/coursehawk.png';
import logo from '../../public/logo.svg';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import SlotText from '@/components/SlotText';

export const metadata: Metadata = {
	title: 'Portfolio - Tyler Gennaro',
	description: 'My personal portfolio.',
};

export default function Home() {
	return (
		<main className='max-w-screen-xl mx-auto mb-40'>
			<section className='h-[100vh] pt-[25vh] px-8'>
				<div>
					<div className='flex items-center justify-between'>
						<div>
							<Text size='xl'>Hey, I&apos;m Tyler</Text>
							<div className='text-7xl font-bold leading-snug'>
								I am a <SlotText />
							</div>
						</div>
						<div className='relative'>
							<div className='bg-primary dark:bg-secondary absolute inset-0 -z-[1] blur-[60px] opacity-50' />
							<Image src={logo} alt='Logo' className='w-28 aspect-square' />
						</div>
					</div>
					<div className='mt-12 space-x-4'>
						<Button>Contact Me</Button>
						<Button variant='outline'>Projects</Button>
					</div>
				</div>
			</section>
			<section className='px-0 xl:px-8'>
				<div className='w-full bg-gradient-to-r from-primary to-secondary xl:rounded-lg px-16 py-32 relative shadow-lg overflow-hidden'>
					<div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2'>
						<img
							src='vortex.svg'
							alt=''
							className='motion-safe:animate-rotate'
						/>
					</div>
					<ShadowHeading color='light'>About Me</ShadowHeading>
					<Text className='max-w-screen-sm mt-4' color='lmuted'>
						I am a student at Monmouth University in West Long Branch, NJ
						expected to graduate in May 2024. I am pursuing a Bachelor&apos;s of
						Science in Computer Science. I have <b>five</b> years experience in
						web development, and <b>two</b> years experience using modern
						frameworks such as React.js.
						<br />
						<br />I am seeking an entry-level software development position to
						utilize problem-solving and collaborative skills to drive company
						success. I am passionate about web development and am eager to
						continue learning and growing.
						<br />
						<br />
						If you&apos;re interested in my work, please reach out to me at{' '}
						<a href='mailto:tylergennaro10@gmail.com' className='underline'>
							tylergennaro10@gmail.com
						</a>
						.
					</Text>
				</div>
			</section>
			<section className='px-8 mt-72'>
				<SectionHeading header='Projects'>
					A list of my projects from the last two years. Each project showcases
					both front- and back-end stacks.
				</SectionHeading>
				<div className='grid grid-cols-2 mt-8 gap-8'>
					<Project>
						<ProjectImage src={pulsateLight} alt='Pulsate' />
						<ProjectTitle>Pulsate</ProjectTitle>
						<ProjectDescription>
							Inventory management application
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>ShadcnUI</ProjectTool>
							<ProjectTool>PostgreSQL</ProjectTool>
							<ProjectTool>Prisma</ProjectTool>
							<ProjectTool>NextAuth</ProjectTool>
							<ProjectTool>React Query</ProjectTool>
							<ProjectTool>Stripe</ProjectTool>
						</ProjectTools>
					</Project>
					<Project>
						<ProjectImage src={devslistLight} alt='DevsList' />
						<ProjectTitle>DevsList</ProjectTitle>
						<ProjectDescription>
							Recruitment platform for developers
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>NextUI</ProjectTool>
							<ProjectTool>MySQL</ProjectTool>
							<ProjectTool>Drizzle ORM</ProjectTool>
							<ProjectTool>NextAuth</ProjectTool>
							<ProjectTool>React Query</ProjectTool>
						</ProjectTools>
					</Project>
					<Project>
						<ProjectImage src={commonwealth} alt='Commonwealth Metal' />
						<ProjectTitle>Commonwealth Metal Company</ProjectTitle>
						<ProjectDescription>Company website</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>ShadcnUI</ProjectTool>
						</ProjectTools>
					</Project>
					<Project>
						<ProjectImage src={coursehawk} alt='CourseHawk' />
						<ProjectTitle>CourseHawk</ProjectTitle>
						<ProjectDescription>
							Professor rating database for Monmouth University
						</ProjectDescription>
						<ProjectTools>
							<ProjectTool>TypeScript</ProjectTool>
							<ProjectTool>Next.js</ProjectTool>
							<ProjectTool>TailwindCSS</ProjectTool>
							<ProjectTool>NextUI</ProjectTool>
							<ProjectTool>Pocketbase</ProjectTool>
						</ProjectTools>
					</Project>
				</div>
			</section>
			<section className='px-0 xl:px-8'>
				<div className='mt-24 bg-[linear-gradient(to_right,_var(--primary),_#18A4B9,_#3068D4_40%,_var(--secondary))] py-8 xl:rounded-lg flex flex-col items-center gap-4 shadow-lg'>
					<Text size='lg' color='light'>
						See more projects
					</Text>
					<a href='https://github.com/TGennnaro' target='_blank'>
						<Button className='' variant='light' icon={Github}>
							GitHub
						</Button>
					</a>
				</div>
			</section>
			<section className='px-8 mt-72'>
				<SectionHeading header='Skills'>
					Languages, frameworks, technologies, and tools that I have hands-on
					experience with. Some skills were utilized in the projects above.
				</SectionHeading>
			</section>
		</main>
	);
}
