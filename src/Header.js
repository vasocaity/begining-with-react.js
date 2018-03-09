import React, {
    Component
} from 'react';

class Header extends Component {

  constructor(props){
    super(props)
    this.handelHeaderClicked = this.handelHeaderClicked.bind(this)
    //bind คือการ set this คือ Component ของ class ๆ นี้
  }

  handelHeaderClicked(){
    alert(this.props.currentUsers)
  }
    render() {
      //let is like var in JS
      //props คือสิ่งที่พ่อส่งให้ลูก
      //state คือสิ่งที่ลูกส่งให้ลูก  onClick={()=>{alert(currentUsers)}}
      let {currentUsers,isLogin} = this.props //ให้ let {currentUsers} = this.props
      currentUsers = "FirstTime with React " + currentUsers
        return (

          <div onClick={this.handelHeaderClicked}> Hi {isLogin && currentUsers} < /div>
        );
    }
}

export default Header;
