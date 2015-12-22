import React from 'react'

import './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <section id="board">
          <table>
              <tbody>
                  <tr className="row">
                      <td className="col" data-coord="0,0"></td>
                      <td className="col" data-coord="1,0"></td>
                      <td className="col" data-coord="2,0"></td>
                      <td className="col" data-coord="3,0"></td>
                      <td className="col" data-coord="4,0"></td>
                      <td className="col" data-coord="5,0"></td>
                      <td className="col" data-coord="6,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="7,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="8,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="9,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="10,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="11,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="12,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="13,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="14,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="15,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="16,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="17,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="18,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="19,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="20,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="21,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="22,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="23,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="24,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="25,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="26,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="27,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="28,0">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="29,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="30,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="31,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="32,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="33,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="34,0">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="35,0">
                          <div className="marker"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,1"></td>
                      <td className="col" data-coord="1,1"></td>
                      <td className="col" data-coord="2,1"></td>
                      <td className="col" data-coord="3,1"></td>
                      <td className="col" data-coord="4,1"></td>
                      <td className="col" data-coord="5,1"></td>
                      <td className="col" data-coord="6,1">
                          <div className="indicator">4</div>
                      </td>
                      <td className="col" data-coord="7,1">
                          <div className="indicator">3</div>
                      </td>
                      <td className="col" data-coord="8,1">
                          <div className="indicator">3</div>
                      </td>
                      <td className="col" data-coord="9,1">
                          <div className="indicator">3</div>
                      </td>
                      <td className="col" data-coord="10,1">
                          <div className="indicator">10</div>
                      </td>
                      <td className="col" data-coord="11,1">
                          <div className="indicator solvable">14</div>
                      </td>
                      <td className="col" data-coord="12,1">
                          <div className="indicator">11</div>
                      </td>
                      <td className="col" data-coord="13,1">
                          <div className="indicator">9</div>
                      </td>
                      <td className="col" data-coord="14,1">
                          <div className="indicator">7</div>
                      </td>
                      <td className="col" data-coord="15,1">
                          <div className="indicator">10</div>
                      </td>
                      <td className="col" data-coord="16,1">
                          <div className="indicator">11</div>
                      </td>
                      <td className="col" data-coord="17,1">
                          <div className="indicator">12</div>
                      </td>
                      <td className="col" data-coord="18,1">
                          <div className="indicator">12</div>
                      </td>
                      <td className="col" data-coord="19,1">
                          <div className="indicator">12</div>
                      </td>
                      <td className="col" data-coord="20,1">
                          <div className="indicator">14</div>
                      </td>
                      <td className="col" data-coord="21,1">
                          <div className="indicator">15</div>
                      </td>
                      <td className="col" data-coord="22,1">
                          <div className="indicator solvable">16</div>
                      </td>
                      <td className="col" data-coord="23,1">
                          <div className="indicator solvable">17</div>
                      </td>
                      <td className="col" data-coord="24,1">
                          <div className="indicator solvable">18</div>
                      </td>
                      <td className="col" data-coord="25,1">
                          <div className="indicator">16</div>
                      </td>
                      <td className="col" data-coord="26,1">
                          <div className="indicator">16</div>
                      </td>
                      <td className="col" data-coord="27,1">
                          <div className="indicator solvable">14</div>
                      </td>
                      <td className="col" data-coord="28,1">
                          <div className="indicator solvable">14</div>
                      </td>
                      <td className="col" data-coord="29,1">
                          <div className="indicator">14</div>
                      </td>
                      <td className="col" data-coord="30,1">
                          <div className="indicator">9</div>
                      </td>
                      <td className="col" data-coord="31,1">
                          <div className="indicator">7</div>
                      </td>
                      <td className="col" data-coord="32,1">
                          <div className="indicator">1</div>
                      </td>
                      <td className="col" data-coord="33,1">
                          <div className="indicator">1</div>
                      </td>
                      <td className="col" data-coord="34,1">
                          <div className="indicator">2</div>
                      </td>
                      <td className="col" data-coord="35,1">
                          <div className="indicator">2</div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,2"></td>
                      <td className="col" data-coord="1,2"></td>
                      <td className="col" data-coord="2,2"></td>
                      <td className="col" data-coord="3,2"></td>
                      <td className="col" data-coord="4,2"></td>
                      <td className="col" data-coord="5,2"></td>
                      <td className="col" data-coord="6,2"></td>
                      <td className="col" data-coord="7,2"></td>
                      <td className="col" data-coord="8,2"></td>
                      <td className="col" data-coord="9,2"></td>
                      <td className="col" data-coord="10,2"></td>
                      <td className="col" data-coord="11,2"></td>
                      <td className="col" data-coord="12,2"></td>
                      <td className="col" data-coord="13,2"></td>
                      <td className="col" data-coord="14,2"></td>
                      <td className="col" data-coord="15,2"></td>
                      <td className="col" data-coord="16,2"></td>
                      <td className="col" data-coord="17,2"></td>
                      <td className="col" data-coord="18,2"></td>
                      <td className="col" data-coord="19,2"></td>
                      <td className="col" data-coord="20,2"></td>
                      <td className="col" data-coord="21,2"></td>
                      <td className="col" data-coord="22,2"></td>
                      <td className="col" data-coord="23,2"></td>
                      <td className="col" data-coord="24,2">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="25,2"></td>
                      <td className="col" data-coord="26,2"></td>
                      <td className="col" data-coord="27,2"></td>
                      <td className="col" data-coord="28,2"></td>
                      <td className="col" data-coord="29,2"></td>
                      <td className="col" data-coord="30,2"></td>
                      <td className="col" data-coord="31,2"></td>
                      <td className="col" data-coord="32,2"></td>
                      <td className="col" data-coord="33,2"></td>
                      <td className="col" data-coord="34,2"></td>
                      <td className="col" data-coord="35,2"></td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,3"></td>
                      <td className="col" data-coord="1,3"></td>
                      <td className="col" data-coord="2,3"></td>
                      <td className="col" data-coord="3,3"></td>
                      <td className="col" data-coord="4,3"></td>
                      <td className="col" data-coord="5,3"></td>
                      <td className="col" data-coord="6,3"></td>
                      <td className="col" data-coord="7,3"></td>
                      <td className="col" data-coord="8,3"></td>
                      <td className="col" data-coord="9,3"></td>
                      <td className="col" data-coord="10,3"></td>
                      <td className="col" data-coord="11,3"></td>
                      <td className="col" data-coord="12,3"></td>
                      <td className="col" data-coord="13,3"></td>
                      <td className="col" data-coord="14,3"></td>
                      <td className="col" data-coord="15,3"></td>
                      <td className="col" data-coord="16,3"></td>
                      <td className="col" data-coord="17,3"></td>
                      <td className="col" data-coord="18,3"></td>
                      <td className="col" data-coord="19,3"></td>
                      <td className="col" data-coord="20,3">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="21,3">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="22,3">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="23,3"></td>
                      <td className="col" data-coord="24,3">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="25,3">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="26,3">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="27,3"></td>
                      <td className="col" data-coord="28,3"></td>
                      <td className="col" data-coord="29,3"></td>
                      <td className="col" data-coord="30,3"></td>
                      <td className="col" data-coord="31,3"></td>
                      <td className="col" data-coord="32,3"></td>
                      <td className="col" data-coord="33,3"></td>
                      <td className="col" data-coord="34,3"></td>
                      <td className="col" data-coord="35,3"></td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,4"></td>
                      <td className="col" data-coord="1,4"></td>
                      <td className="col" data-coord="2,4"></td>
                      <td className="col" data-coord="3,4"></td>
                      <td className="col" data-coord="4,4"></td>
                      <td className="col" data-coord="5,4"></td>
                      <td className="col" data-coord="6,4"></td>
                      <td className="col" data-coord="7,4"></td>
                      <td className="col" data-coord="8,4"></td>
                      <td className="col" data-coord="9,4"></td>
                      <td className="col" data-coord="10,4"></td>
                      <td className="col" data-coord="11,4"></td>
                      <td className="col" data-coord="12,4"></td>
                      <td className="col" data-coord="13,4"></td>
                      <td className="col" data-coord="14,4"></td>
                      <td className="col" data-coord="15,4"></td>
                      <td className="col" data-coord="16,4"></td>
                      <td className="col" data-coord="17,4"></td>
                      <td className="col" data-coord="18,4"></td>
                      <td className="col" data-coord="19,4">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="20,4">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="21,4">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="22,4">
                          <div className="block">5</div>
                      </td>
                      <td className="col" data-coord="23,4">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="24,4">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="25,4">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="26,4">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="27,4"></td>
                      <td className="col" data-coord="28,4"></td>
                      <td className="col" data-coord="29,4"></td>
                      <td className="col" data-coord="30,4"></td>
                      <td className="col" data-coord="31,4"></td>
                      <td className="col" data-coord="32,4"></td>
                      <td className="col" data-coord="33,4"></td>
                      <td className="col" data-coord="34,4"></td>
                      <td className="col" data-coord="35,4"></td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,5"></td>
                      <td className="col" data-coord="1,5"></td>
                      <td className="col" data-coord="2,5"></td>
                      <td className="col" data-coord="3,5"></td>
                      <td className="col" data-coord="4,5"></td>
                      <td className="col" data-coord="5,5"></td>
                      <td className="col" data-coord="6,5"></td>
                      <td className="col" data-coord="7,5"></td>
                      <td className="col" data-coord="8,5"></td>
                      <td className="col" data-coord="9,5"></td>
                      <td className="col" data-coord="10,5"></td>
                      <td className="col" data-coord="11,5"></td>
                      <td className="col" data-coord="12,5">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="13,5">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="14,5">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="15,5">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="16,5">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="17,5">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="18,5">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="19,5">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="20,5">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="21,5">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="22,5">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="23,5">
                          <div className="block">8</div>
                      </td>
                      <td className="col" data-coord="24,5">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="25,5">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="26,5">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="27,5">
                          <div className="block">9</div>
                      </td>
                      <td className="col" data-coord="28,5">
                          <div className="block">8</div>
                      </td>
                      <td className="col" data-coord="29,5">
                          <div className="block">6</div>
                      </td>
                      <td className="col" data-coord="30,5">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="31,5"></td>
                      <td className="col" data-coord="32,5"></td>
                      <td className="col" data-coord="33,5"></td>
                      <td className="col" data-coord="34,5"></td>
                      <td className="col" data-coord="35,5"></td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,6"></td>
                      <td className="col" data-coord="1,6"></td>
                      <td className="col" data-coord="2,6"></td>
                      <td className="col" data-coord="3,6"></td>
                      <td className="col" data-coord="4,6"></td>
                      <td className="col" data-coord="5,6"></td>
                      <td className="col" data-coord="6,6"></td>
                      <td className="col" data-coord="7,6"></td>
                      <td className="col" data-coord="8,6"></td>
                      <td className="col" data-coord="9,6"></td>
                      <td className="col" data-coord="10,6">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="11,6">
                          <div className="block">11</div>
                      </td>
                      <td className="col" data-coord="12,6">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="13,6">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="14,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="15,6">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="16,6">
                          <div className="block">6</div>
                      </td>
                      <td className="col" data-coord="17,6">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="18,6">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="19,6">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="20,6">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="21,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="22,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="23,6">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="24,6">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="25,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="26,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="27,6">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="28,6">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="29,6">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="30,6">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="31,6"></td>
                      <td className="col" data-coord="32,6"></td>
                      <td className="col" data-coord="33,6"></td>
                      <td className="col" data-coord="34,6"></td>
                      <td className="col" data-coord="35,6"></td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,7"></td>
                      <td className="col" data-coord="1,7"></td>
                      <td className="col" data-coord="2,7"></td>
                      <td className="col" data-coord="3,7"></td>
                      <td className="col" data-coord="4,7"></td>
                      <td className="col" data-coord="5,7"></td>
                      <td className="col" data-coord="6,7">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="7,7">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="8,7">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="9,7">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="10,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="11,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="12,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="13,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="14,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="15,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="16,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="17,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="18,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="19,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="20,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="21,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="22,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="23,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="24,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="25,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="26,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="27,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="28,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="29,7">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="30,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="31,7">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="32,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="33,7">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="34,7">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="35,7">
                          <div className="block">2</div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,8">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,8">
                          <div className="indicator">12</div>
                      </td>
                      <td className="col" data-coord="2,8"></td>
                      <td className="col" data-coord="3,8"></td>
                      <td className="col" data-coord="4,8"></td>
                      <td className="col" data-coord="5,8">
                          <div className="block">12</div>
                      </td>
                      <td className="col" data-coord="6,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,8">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,8">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,9">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,9">
                          <div className="indicator">7</div>
                      </td>
                      <td className="col" data-coord="2,9"></td>
                      <td className="col" data-coord="3,9"></td>
                      <td className="col" data-coord="4,9">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="5,9">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="6,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,9">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,9">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,10">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,10">
                          <div className="indicator">7</div>
                      </td>
                      <td className="col" data-coord="2,10"></td>
                      <td className="col" data-coord="3,10"></td>
                      <td className="col" data-coord="4,10">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,10">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="6,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,10">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,10">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,11">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,11">
                          <div className="indicator">6</div>
                      </td>
                      <td className="col" data-coord="2,11"></td>
                      <td className="col" data-coord="3,11"></td>
                      <td className="col" data-coord="4,11">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="5,11">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="6,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,11">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,11">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,12">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,12">
                          <div className="indicator">13</div>
                      </td>
                      <td className="col" data-coord="2,12"></td>
                      <td className="col" data-coord="3,12"></td>
                      <td className="col" data-coord="4,12">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,12">
                          <div className="block">10</div>
                      </td>
                      <td className="col" data-coord="6,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,12">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,12">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,13">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,13">
                          <div className="indicator">16</div>
                      </td>
                      <td className="col" data-coord="2,13"></td>
                      <td className="col" data-coord="3,13"></td>
                      <td className="col" data-coord="4,13">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,13">
                          <div className="block">13</div>
                      </td>
                      <td className="col" data-coord="6,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,13">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,13">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,14">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,14">
                          <div className="indicator">17</div>
                      </td>
                      <td className="col" data-coord="2,14"></td>
                      <td className="col" data-coord="3,14">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="4,14">
                          <div className="block">9</div>
                      </td>
                      <td className="col" data-coord="5,14">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="6,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,14">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,14">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,15">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,15">
                          <div className="indicator">16</div>
                      </td>
                      <td className="col" data-coord="2,15">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="3,15">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="4,15">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="5,15">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="6,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,15">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,15">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,16">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,16">
                          <div className="indicator">17</div>
                      </td>
                      <td className="col" data-coord="2,16"></td>
                      <td className="col" data-coord="3,16">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="4,16">
                          <div className="block">5</div>
                      </td>
                      <td className="col" data-coord="5,16">
                          <div className="block">8</div>
                      </td>
                      <td className="col" data-coord="6,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,16">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,16">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,17">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,17">
                          <div className="indicator">17</div>
                      </td>
                      <td className="col" data-coord="2,17"></td>
                      <td className="col" data-coord="3,17">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="4,17">
                          <div className="block">6</div>
                      </td>
                      <td className="col" data-coord="5,17">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="6,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,17">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,17">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,18">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="1,18">
                          <div className="indicator solvable">18</div>
                      </td>
                      <td className="col" data-coord="2,18"></td>
                      <td className="col" data-coord="3,18"></td>
                      <td className="col" data-coord="4,18">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,18">
                          <div className="block">15</div>
                      </td>
                      <td className="col" data-coord="6,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,18">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,18">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,19">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,19">
                          <div className="indicator">15</div>
                      </td>
                      <td className="col" data-coord="2,19"></td>
                      <td className="col" data-coord="3,19">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="4,19">
                          <div className="block">7</div>
                      </td>
                      <td className="col" data-coord="5,19">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="6,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,19">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,19">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,20">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,20">
                          <div className="indicator">4</div>
                      </td>
                      <td className="col" data-coord="2,20"></td>
                      <td className="col" data-coord="3,20"></td>
                      <td className="col" data-coord="4,20">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,20">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="6,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,20">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,20">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,21">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,21">
                          <div className="indicator">8</div>
                      </td>
                      <td className="col" data-coord="2,21"></td>
                      <td className="col" data-coord="3,21"></td>
                      <td className="col" data-coord="4,21">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="5,21">
                          <div className="block">5</div>
                      </td>
                      <td className="col" data-coord="6,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,21">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,21">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,22">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,22">
                          <div className="indicator">13</div>
                      </td>
                      <td className="col" data-coord="2,22"></td>
                      <td className="col" data-coord="3,22">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="4,22">
                          <div className="block">5</div>
                      </td>
                      <td className="col" data-coord="5,22">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="6,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,22">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,22">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,23">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,23">
                          <div className="indicator">12</div>
                      </td>
                      <td className="col" data-coord="2,23"></td>
                      <td className="col" data-coord="3,23">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="4,23">
                          <div className="block">6</div>
                      </td>
                      <td className="col" data-coord="5,23">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="6,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,23">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,23">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,24">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,24">
                          <div className="indicator">11</div>
                      </td>
                      <td className="col" data-coord="2,24">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="3,24">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="4,24">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="5,24">
                          <div className="block">1</div>
                      </td>
                      <td className="col" data-coord="6,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,24">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,24">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,25">
                          <div className="marker"></div>
                      </td>
                      <td className="col" data-coord="1,25">
                          <div className="indicator">14</div>
                      </td>
                      <td className="col" data-coord="2,25"></td>
                      <td className="col" data-coord="3,25">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="4,25">
                          <div className="block">5</div>
                      </td>
                      <td className="col" data-coord="5,25">
                          <div className="block">3</div>
                      </td>
                      <td className="col" data-coord="6,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,25">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,25">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,26">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="1,26">
                          <div className="indicator solvable">26</div>
                      </td>
                      <td className="col" data-coord="2,26"></td>
                      <td className="col" data-coord="3,26">
                          <div className="block">6</div>
                      </td>
                      <td className="col" data-coord="4,26">
                          <div className="block">16</div>
                      </td>
                      <td className="col" data-coord="5,26">
                          <div className="block">2</div>
                      </td>
                      <td className="col" data-coord="6,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,26">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,26">
                          <div className="cell"></div>
                      </td>
                  </tr>
                  <tr className="row">
                      <td className="col" data-coord="0,27">
                          <div className="marker marked"></div>
                      </td>
                      <td className="col" data-coord="1,27">
                          <div className="indicator solvable">25</div>
                      </td>
                      <td className="col" data-coord="2,27"></td>
                      <td className="col" data-coord="3,27">
                          <div className="block">9</div>
                      </td>
                      <td className="col" data-coord="4,27">
                          <div className="block">10</div>
                      </td>
                      <td className="col" data-coord="5,27">
                          <div className="block">4</div>
                      </td>
                      <td className="col" data-coord="6,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="7,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="8,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="9,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="10,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="11,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="12,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="13,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="14,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="15,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="16,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="17,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="18,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="19,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="20,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="21,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="22,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="23,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="24,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="25,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="26,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="27,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="28,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="29,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="30,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="31,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="32,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="33,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="34,27">
                          <div className="cell"></div>
                      </td>
                      <td className="col" data-coord="35,27">
                          <div className="cell"></div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </section>
    )
  }
}
