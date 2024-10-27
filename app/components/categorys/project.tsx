import Link from "next/link";
import Image from "next/image";

interface ProjectData {
  name: string;
  description: string;
  namePath: string;
  repo: string;
  repoPath: string;
}

function ProjectRow({ name, description, namePath, repo, repoPath }: ProjectData) {
  return (
    <tr>
      <td className="w-44">
        <Link href={namePath}>{name}</Link>
      </td>
      <td>{description}</td>
      <td className="repo">
        <Link className="material-symbols-outlined" href={repoPath}>{repo}</Link>
      </td>
    </tr>
  );
}

export default function Project() {
  const data: ProjectData[] = [
    { name: "Snap Frame",
      description: "A web application that allows users to take and download photos using their webcam.",
      namePath: "https://snap-frame.vercel.app/",
      repo: "open_in_new", repoPath: "https://github.com/boyeoon/snap-frame"
    },
    { name: "I Love Sudoku",
      description: "A game that implements Sudoku for users of all skill levels.",
      namePath: "https://i-love-sudoku.vercel.app/",
      repo: "open_in_new", repoPath: "https://github.com/boyeoon/i-love-sudoku"
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

      <div>
        <h3>Snap Frame</h3>
        <Image src={"https://i.imgur.com/Pszkoy2.png"} alt="snap-frame" width={500} height={500} />
        <p>This project is a web application that allows users to take photos using their webcam and download them. Users can activate the camera, select each frame, strike a pose, and capture their photos. After capturing, they can download all the selected frames.</p>
      </div>

      <div>
        <h3>I Love Sudoku</h3>
        <Image src={"https://i.imgur.com/izazpAU.png"} alt="i-love-sudoku" width={500} height={500} />
        <p>This app is a side project that implements a Sudoku game, designed to provide an engaging experience for users of all skill levels. It helps users solve Sudoku puzzles and discover solutions.</p>
      </div>
    </main>
  );
}