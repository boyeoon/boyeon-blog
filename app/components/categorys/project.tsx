import Link from "next/link";
import Image from "next/image";

interface ProjectData {
  name: string;
  description: string;
  namePath: string;
  repo: string;
  repoPath: string;
}

function ProjectRow({
  name,
  description,
  namePath,
  repo,
  repoPath,
}: ProjectData) {
  return (
    <tr>
      <td className="w-44">
        <Link href={namePath}>{name}</Link>
      </td>
      <td>{description}</td>
      <td className="repo">
        <Link className="material-symbols-outlined" href={repoPath}>
          {repo}
        </Link>
      </td>
    </tr>
  );
}

export default function Project() {
  const data: ProjectData[] = [
    {
      name: "All Pokémon Names",
      description:
        "It's a game to guess the names of Pokémon from each region.",
      namePath: "https://all-pokemon-names.vercel.app/",
      repo: "open_in_new",
      repoPath: "https://github.com/boyeoon/all-pokemon-names",
    },
    {
      name: "Snap Frame",
      description:
        "A web application that allows users to take and download photos using their webcam.",
      namePath: "https://snap-frame.vercel.app/",
      repo: "open_in_new",
      repoPath: "https://github.com/boyeoon/snap-frame",
    },
    {
      name: "I Love Sudoku",
      description:
        "A game that implements Sudoku for users of all skill levels.",
      namePath: "https://i-love-sudoku.vercel.app/",
      repo: "open_in_new",
      repoPath: "https://github.com/boyeoon/i-love-sudoku",
    },
    {
      name: "Boyeoon",
      description: "It's a personal portfolio and tech blog site.",
      namePath: "https://boyeoon.vercel.app/",
      repo: "open_in_new",
      repoPath: "https://github.com/boyeoon/boyeon-blog",
    },
  ];

  return (
    <main className="p-8">
      <div>
        <h2>Side Projects</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Repo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <ProjectRow key={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>

      <hr />

      <div className="pt-4 pb-16">
        <div className="relative border-2 rounded-md shadow-2xl border-slate-500 dark:shadow-slate-950">
          <h3 className="absolute top-[-3.8rem] left-[1rem] bg-white dark:bg-slate-900 px-2">
            All Pokémon Names
          </h3>
          <div className="p-6">
            Do you know all the Pokémon from the Kanto region (1st generation),
            Johto region (2nd generation), Hoenn region (3rd generation), and
            beyond? This interactive quiz application allows you to test your
            knowledge of Pokémon. Your goal is to guess the names of the Pokémon
            based on their Pokédex numbers. For users who want to enjoy hard
            mode, there is a feature to display or hide the Pokédex numbers.
          </div>
        </div>
      </div>

      <div className="pt-4 pb-16">
        <div className="relative border-2 rounded-md shadow-2xl border-slate-500 dark:shadow-slate-950">
          <h3 className="absolute top-[-3.8rem] left-[1rem] bg-white dark:bg-slate-900 px-2">
            Snap Frame
          </h3>
          {/* <Image
          src={"https://i.imgur.com/Pszkoy2.png"}
          alt="snap-frame"
          width={500}
          height={500}
        /> */}
          <div className="p-6">
            This project is a web application that allows users to take photos
            using their webcam and download them. Users can activate the camera,
            select each frame, strike a pose, and capture their photos. After
            capturing, they can download all the selected frames.
          </div>
        </div>
      </div>

      <div className="pt-4 pb-16">
        <div className="relative border-2 rounded-md shadow-2xl border-slate-500 dark:shadow-slate-950">
          <h3 className="absolute top-[-3.8rem] left-[1rem] bg-white dark:bg-slate-900 px-2">
            I Love Sudoku
          </h3>
          {/* <Image
          src={"https://i.imgur.com/izazpAU.png"}
          alt="i-love-sudoku"
          width={500}
          height={500}
        /> */}
          <div className="p-6">
            This app is a side project that implements a Sudoku game, designed
            to provide an engaging experience for users of all skill levels. It
            helps users solve Sudoku puzzles and discover solutions.
          </div>
        </div>
      </div>
    </main>
  );
}
