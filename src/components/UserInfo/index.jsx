import * as React from 'react'
import { Follow } from 'react-twitter-widgets'

function UserInfo({ expanded, config }) {
  const { userTwitter } = config
  return <Follow username={userTwitter} options={{ count: expanded ? true : 'none' }} />
}

export default UserInfo
