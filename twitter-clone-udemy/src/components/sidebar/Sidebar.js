import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* twittericon*/}
      <TwitterIcon className="sidebar--twitterIcon" />

      {/* sidebaroption */}
      <SidebarOption text='ホーム' Icon={HomeIcon}/>
      <SidebarOption text='話題を検索' Icon={SearchIcon}/>
      <SidebarOption text='通知' Icon={MailOutlineIcon}/>
      <SidebarOption text='メッセージ' Icon={BookmarkBorderIcon}/>
      <SidebarOption text='ブックマーク' Icon={ListAltIcon}/>
      <SidebarOption text='プロフィール' Icon={PermIdentityIcon}/>
      <SidebarOption text='もっと見る' Icon={MoreHorizIcon}/>

      <Button variant="outlined" className="sidebar--tweet">ボタン</Button>
      {/* tweetbutton */}
    </div>
  )
}

export default Sidebar
