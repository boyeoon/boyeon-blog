import Link from "next/link";

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
        <h3>sdsdsd</h3>
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
        <h2>Team Projects</h2>
        <p>Here you can find all my projects, showcasing my skills and creativity.</p>
      </div>
    </main>
  );
}