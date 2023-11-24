/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

import { BsGithub as GithubIcon } from "react-icons/bs";

import Calendar from "./Calendar";
import Overview from "./Overview";
import { GITHUB_ACCOUNTS } from "@/app/commons/constants/github";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";

export default function Contributions({ githubData }) {
  // console.log(GITHUB_ACCOUNTS.username);
  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          My contributions from last year on github.
        </p>
        <Link
          // href={`https://github.com/${GITHUB_ACCOUNTS.username}`}
          href={`https://github.com/renal-d`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          {/* @{GITHUB_ACCOUNTS.username} */}
          @renal-d
        </Link>
      </SectionSubHeading>

      {!githubData && <div className="dark:text-neutral-400">No Data</div>}

      {githubData && (
        <div className="space-y-3">
          <Overview data={githubData} />
          <Calendar data={githubData} />
        </div>
      )}
    </section>
  );
}
