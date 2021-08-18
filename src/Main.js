import  React from 'react'
import Card from './Card'
import Rate from "./Rate"
function Main () {
    return (
       <>
          <div className="container">
              <div className="main">
                  <Card />
                  <Rate />
              </div>
          </div>
       </>
    )
}
export default Main