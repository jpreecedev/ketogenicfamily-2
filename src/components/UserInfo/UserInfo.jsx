import * as React from 'react'
import { Follow } from 'react-twitter-widgets'

function UserInfo() {
  const { userTwitter } = this.props.config
  const { expanded } = this.props
  return <Follow username={userTwitter} options={{ count: expanded ? true : 'none' }} />
}

export default UserInfo
