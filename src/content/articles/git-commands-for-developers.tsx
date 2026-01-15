import { ArticleMeta } from '@/types/article';

export const meta: ArticleMeta = {
  title: 'Git Commands For Developers',
  slug: 'git-commands-for-developers',
  description:
    'Version control in a nutshell allows you to update, share and track code from a centralised location. It is a perfect way for you to contribute your changes to a shared codebase with a team of other developers all working on the same project.',
  publishDate: '2015-12-15',
  tags: ['git', 'version-control', 'development'],
};

export default function GitCommandsForDevelopers() {
  return (
    <article>
      <h2>What is version control?</h2>
      <p>
        Version control in a nutshell allows you to update, share and track code from a
        centralised location. It is a perfect way for you to contribute your changes to a
        shared codebase with a team of other developers all working on the same project.
      </p>
      <p>
        The most used version control system or VCS for short is Git. Git has been around
        for years originally created in 2005 it allows developers to share code in an
        effective way and is well supported by various different code editors such as
        VSCode and Sublime Text.
      </p>

      <h2>Is it hard to learn Git?</h2>
      <p>
        I believe that version control should be one of the first things you learn as you
        are pursuing a career as a Web Developer. Most teams use Git so it is essential
        that you at least understand the basic commands and can commit, merge and push
        your changes up to a remote repository.
      </p>

      <h2>Basic Commands</h2>
      <p>
        <strong>How to create a git repo?</strong>
      </p>
      <pre>
        <code>git init</code>
      </pre>

      <p>
        <strong>How to add a file to the repo?</strong>
      </p>
      <pre>
        <code>git add &lt;filename&gt;</code>
      </pre>

      <p>
        <strong>How to commit a change?</strong>
      </p>
      <pre>
        <code>git commit -m &quot;message&quot;</code>
      </pre>

      <p>
        <strong>How to view the status of a project?</strong>
      </p>
      <pre>
        <code>git status</code>
      </pre>

      <p>
        <strong>How to log all git commit history?</strong>
      </p>
      <pre>
        <code>git log --oneline</code>
      </pre>

      <h2>Branching Commands</h2>
      <p>
        A branch in Git is simply a lightweight movable pointer to an individual commit.
        You could for example branch off from your colleagues branch and make your own
        changes to their work!
      </p>

      <p>
        <strong>How to create a branch and switch to it?</strong>
      </p>
      <pre>
        <code>git checkout -b branch_name</code>
      </pre>

      <p>
        <strong>How to list all branches?</strong>
      </p>
      <pre>
        <code>git branch -a</code>
      </pre>

      <p>
        <strong>How to delete a branch?</strong>
      </p>
      <pre>
        <code>git branch -D branch_name</code>
      </pre>

      <h2>Merging Commands</h2>
      <p>
        Like the opposite of branching, merging will bring all changes and commits into
        one timeline.
      </p>

      <p>
        <strong>How to merge a branch?</strong>
      </p>
      <pre>
        <code>git merge feature_branch</code>
      </pre>

      <h2>Remote Repositories</h2>
      <p>
        This is where you can essentially clone (copy) a centralised repo to then work on
        a specific task within that project.
      </p>

      <p>
        <strong>How to clone a repo to your local machine?</strong>
      </p>
      <pre>
        <code>git clone https://repo_url.git</code>
      </pre>

      <p>
        <strong>How to push a commit to the remote repo?</strong>
      </p>
      <pre>
        <code>git push origin branch_name</code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        These are just a snippet of some of the Git commands that I find myself using
        often. Git is one of those tools that you gradually pick up over time so
        don&apos;t worry too much if it all doesn&apos;t make sense right now.
      </p>
      <p>
        Git also comes with a fantastic documentation you can find this here:{' '}
        <a href="https://git-scm.com/docs">Git Documentation</a>
      </p>
    </article>
  );
}
