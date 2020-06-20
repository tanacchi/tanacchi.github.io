import React from 'react'
import { Box, SvgIcon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import GitHubIcon from '@material-ui/icons/GitHub'
import BlogIcon from '@material-ui/icons/BookOutlined'
import TwitterIcon from '@material-ui/icons/Twitter'
import QiitaIcon from '@material-ui/icons/Pets'

type RefButtonProps = {
  url: string,
  text: string,
  icon: any
}
const RefButton: React.FC<RefButtonProps> = ({ url, text, icon }) => {
  return (
    <Button
      href={url}
      target="_blank"
      color="primary"
      variant="outlined"
      startIcon={icon}>
      {text}
    </Button>
  )
}

const Access: React.FC = () => {
  const githubURL: string = "https://github.com/tanacchi/"
  const twitterURL: string = "https://twitter.com/q111026d/"
  const blogURL: string = "https://tanacchi.hatenablog.com/"
  const qiitaURL: string = "https://qiita.com/tanacchi/"

  console.log(typeof (<GitHubIcon />))

  return (
    <div id="Access">
      <Box>
        <h2>Access</h2>
        <ButtonGroup>
          <RefButton
            url={githubURL}
            text="GitHub"
            icon={<GitHubIcon />} />
          <RefButton
            url={blogURL}
            text="Blog"
            icon={<BlogIcon />} />
          <RefButton
            url={twitterURL}
            text="Twitter"
            icon={<TwitterIcon />} />
          <RefButton
            url={qiitaURL}
            text="Qiita"
            icon={<QiitaIcon />} />
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default Access
