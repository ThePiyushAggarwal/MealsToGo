Learnings

- Installed @react-native-community/eslint-config with prettier and eslint
  -- Had to do so many fixes.
  -- Wrote a [stackoverflow answer](https://stackoverflow.com/a/72583052/8040054)
  -- Tried disabling prettier by .prettierignore and an asterisk inside.
  -- Right way was to disable the extension for the particular workspace.
  -- Becuase it was disabling the prettier I installed with eslint.
  -- Phew!!
  -- No the problem wasn't solved. So, I asked a question on [stackoverflow](https://stackoverflow.com/questions/72584020/eslint-prettier-eslint-config-react-native-community-integration-with-pretti)
  -- But while writing the question, I kinda understood what I had to do. So, I answered it right away as well.
  -- I faced another problem as well. I edited .prettierrc file and added {"semi":true} but the prettier extension stopped looking at the my rule of single quotes I mentioned in vs code settings. So I had to add "singleQuote":true in the prettierrc file. Don't know why. But I can't pursue this further. Need to focus on project.
