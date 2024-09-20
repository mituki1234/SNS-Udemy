import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twittericon*/}
      <TwitterIcon className='sidebar--twitterIcon'/>

      {/* sidebaroption */}
      <SidebarOption text='ホーム' Icon={HomeIcon}/>
      <SidebarOption text='話題を検索' Icon={HomeIcon}/>
      <SidebarOption text='通知' Icon={HomeIcon}/>
      <SidebarOption text='メッセージ' Icon={HomeIcon}/>
      <SidebarOption text='ブックマーク' Icon={HomeIcon}/>
      <SidebarOption text='プロフィール' Icon={HomeIcon}/>
      <SidebarOption text='もっと見る' Icon={HomeIcon}/>

      {/* tweetbutton */}
    </div>
  )
}

export default Sidebar
