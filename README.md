# [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) 

<p align="center">
  <img height="400" src="./assets/logo_transparent.png"/>
</p>

# Continous Package Release Template

The idea behind this repository was to create a template that can be salvaged to get up and running fast when deploying
a new npm package. However, before we get into any detail: Shout out to the folks behind [semantic-release](https://github.com/semantic-release/semantic-release)
This template would not be possible without all the great work which has gone into this project. 
This repository does publish packages to the private registry available within [GitHub Packages](https://github.com/features/packages). 

## Usage 
1. Navigate to the [copare-template repository](https://github.com/VeegY/copare-template) and [generate a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) based on this template
2. Replace some values:
    * Change the [branch name in the action](https://github.com/VeegY/copare-template/blob/d0c2c446ec8f29d09a8a24c5c7f7004ec9287c12/.github/workflows/release.yml#L6) to match your default branch name.
    * Change the [package name](https://github.com/VeegY/copare-template/blob/d0c2c446ec8f29d09a8a24c5c7f7004ec9287c12/package.json#L2). Has to start with either @-name- or @-organization- depending on where it is hosted.
    * Change the [repository url](https://github.com/VeegY/copare-template/blob/d0c2c446ec8f29d09a8a24c5c7f7004ec9287c12/package.json#L7) to match the newly created repository.
    * Optionally, change the dependabot [target-branch](https://github.com/VeegY/copare-template/blob/d0c2c446ec8f29d09a8a24c5c7f7004ec9287c12/.github/dependabot.yml#L10). Check the [workflow](#dependabot-pull-requests) section on why the develop-branch is the target-branch.
3. Create a [personal-access-token](https://github.com/settings/tokens) with the scopes ``read:packages``, ``write:packages`` and ``repo``.
This token has to be added as a [repository secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets) with the
name ``NPM_TOKEN``.
4. If you **do** keep the develop-branch as target-branch make sure to add the actual branch to the repository. 

## Workflow
There is no much limitation to what workflow to use. Any push on the main-branch will trigger a release. Currently, 
the only restriction is the commit message pattern. I decided to use the 
[ESLint Convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint) 
since it reflected my own way of writing commit messages the best. This can be changed to any other 
[conventional-changelog preset](https://github.com/semantic-release/release-notes-generator#options) inside the 
[release-action configuration](https://github.com/VeegY/copare-template/blob/d0c2c446ec8f29d09a8a24c5c7f7004ec9287c12/.releaserc#L5).

### ESLint convention:

```
Tag: Short description (fixes #1234)

Longer description here if necessary
```

The first line of the commit message (the summary) must have a specific format. This format is checked by our build tools.

The `Tag` is one of the following:

* `Fix` - for a bug fix.
* `Update` - either for a backwards-compatible enhancement or for a rule change that adds reported problems.
* `New` - implemented a new feature.
* `Breaking` - for a backwards-incompatible enhancement or feature.
* `Docs` - changes to documentation only.
* `Build` - changes to build process only.
* `Upgrade` - for a dependency upgrade.
* `Chore` - for refactoring, adding tests, etc. (anything that isn't user-facing).

Use the [labels of the issue you are working on](working-on-issues.md#issue-labels) to determine the best tag.

The message summary should be a one-sentence description of the change, and it must be 72 characters in length or shorter. If the pull request addresses an issue, then the issue number should be mentioned at the end. If the commit doesn't completely fix the issue, then use `(refs #1234)` instead of `(fixes #1234)`.

Here are some good commit message summary examples:

```
Build: Update Travis to only test Node 0.10 (refs #734)
Fix: Semi rule incorrectly flagging extra semicolon (fixes #840)
Upgrade: Esprima to 1.2, switch to using comment attachment (fixes #730)
```

The commit message format is important because these messages are used to create a changelog for each release. The tag and issue number help to create more consistent and useful changelogs.


#### Dependabot Pull Requests
Due to the fact that dependabot creates a pull request for a single package update I decided to add a develop
branch and adapt the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) a
bit more than I would have liked to. In an ideal world developers and bots alike would just work on the main-branch
and commit changes and features there which then would lead into an immediate upgrade of the package.
However, since every dependabot pull request would trigger a patch-version increase this would lead to, at least I 
think so, in a very fast increasing number and multiple version increases where there could just be one.
The dev branch is now used to aggregate commits or changes which then can be applied to the main-branch by a single
pull request.

## Work in Progress
* Documentation to enhance this process to fit your needs.
* Automatically merge master into develop after a successful release. This ensures the package version in the develop-branch
stays up to date.
* Document the tech-stack
* Add npm badge
