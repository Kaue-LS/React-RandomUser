import * as S from "./style/styled";
import Dice from '../components/style/img/dice.png'
export default function CreateUser({ user }) {
  const data=user.registered.date
  var test= data.substring(0,10)

  const Reload=()=>(
    document.location.reload(true)
  )
  // var matches = /^(\d{4})[-./](\d{2})[-./](\d{2})/.exec(data);
  return (
    <S.Area>
      <S.Title>Register</S.Title>
      <S.Form>
        <S.Infobottom>
        <S.AreaImage>
          <S.Image src={user.picture.large} alt={user.name.first} />
        </S.AreaImage>
            <S.Registered>

                <S.Reg>Date: <S.Datareg>{test}</S.Datareg> </S.Reg>
                <S.Reg>Phone: <S.Datareg>{user.phone } </S.Datareg></S.Reg>
                <S.Reg>Cell: <S.Datareg>{user.cell } </S.Datareg></S.Reg>
              
             
            </S.Registered>
        </S.Infobottom>
        <S.Desc>
          <S.UserInfo>
            <S.Topic>Informations:</S.Topic>
            <S.Table>
              <tr>
                <td><S.Label>Name</S.Label></td>
                <td><S.Label>Last Name</S.Label></td>
              </tr>
              <tr>
              <td>
                <S.Data>{user.name.first } </S.Data>
              </td>
              <td>
                <S.Data>{user.name.last}</S.Data> 
                </td>
              </tr>
              <tr>
                <td>
                <S.Label>Gender: </S.Label>
                </td>
                <td><S.Label>Age:</S.Label></td>
              </tr>
              <tr>
                <td>
              <span><S.Data>{user.gender}</S.Data></span>
              </td>
              <td>
              <S.Data>{user.dob.age}</S.Data>
              </td>
              </tr>
            </S.Table>
          </S.UserInfo>

          <S.UserInfo>
            <S.Topic>Locations:</S.Topic>
            <S.Table>
              <tr>
            <td><S.Label>Street:</S.Label></td>
              <td><S.Label>Number: </S.Label> </td>
            </tr>
            <tr>
              <td><S.Data>{user.location.street.name}</S.Data></td>
              <td><S.Data>{user.location.street.number}</S.Data></td>
            </tr>
            <tr>
            <td><S.Label>City:</S.Label></td> 
            <td><S.Label>State:</S.Label> </td>
            </tr>
            <tr>
              <td>
            <S.Data>
            {user.location.state}
            </S.Data>
            </td>
            <td>
              <S.Data>
            {user.location.city}
            </S.Data>
            </td>
            </tr>
            <tr>
            <td><S.Label>Country: </S.Label></td> 
            <td><S.Label>Post code: </S.Label></td>
            </tr>
            <tr>
              <td>
                <S.Data>
              {user.location.country}
              </S.Data>
              </td>
              <td>
                <S.Data>
              {user.location.postcode}
              </S.Data>
              </td>
            </tr>
            
            </S.Table>
            
          </S.UserInfo>
        </S.Desc>
      </S.Form>
      <S.Button onClick={()=>Reload()} ><S.Dice src={Dice} alt='dice'/>Randonizer</S.Button>

    </S.Area>
    
  );
}
