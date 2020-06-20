import React from 'react'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'

type RefButtonProps = { url: string, text: string }
const RefButton: React.FC<RefButtonProps> = ({ url, text }) => {
  return (
    <Button
      href={url}
      variant="outlined"
      target="_blank"
      color="primary">
      {text}
    </Button>
  )
}

const Access: React.FC = () => {
  const githubURL: string = "https://github.com/tanacchi/"
  const twitterURL: string = "https://twitter.com/q111026d/"
  const blogURL: string = "https://tanacchi.hatenablog.com/"
  const qiitaURL: string = "https://qiita.com/tanacchi/"

  return (
    <div id="Access">
      <Box>
        <h2>Access</h2>
        <RefButton
          url={githubURL}
          text="GitHub" />
        <RefButton
          url={blogURL}
          text="Blog" />
        <RefButton
          url={twitterURL}
          text="Twitter" />
        <RefButton
          url={qiitaURL}
          text="Qiita" />
      </Box>
    </div>
  )
}

export default Access
