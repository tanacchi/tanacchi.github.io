import React from 'react';
import logo from './logo.svg';
import './App.css';
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'
import Works from './components/Works'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tanacchi</h1>
        <p>This is the tanacchi's portfolio.</p>
      </header>
      <Access />
      <Affiliations />
      <Events />
      <Works />
      <h2 id="skills">Skills</h2>
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>C/C++</td>
            <td>RPG ゲーム開発，ROS ノード</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Web サービス，機械学習，Lisp インタプリタ</td>
          </tr>
          <tr>
            <td>ROS</td>
            <td>自律移動ロボット開発</td>
          </tr>
          <tr>
            <td>Ruby on Rails</td>
            <td>Web サービス開発(1年間)</td>
          </tr>
          <tr>
            <td>機械学習</td>
            <td>独学3ヶ月 ＋ 大学院で研究</td>
          </tr>
          <tr>
            <td>Flask</td>
            <td>簡単なWebサービス，LINE Bot 開発</td>
          </tr>
          <tr>
            <td>Ruby</td>
            <td>Rails で使う程度</td>
          </tr>
          <tr>
            <td>Lisp</td>
            <td>趣味程度</td>
          </tr>
          <tr>
            <td>Vue.js</td>
            <td>趣味程度</td>
          </tr>
          <tr>
            <td>Rust</td>
            <td>Hello World</td>
          </tr>
        </tbody>
      </table>

      <h2 id="internships">Internships</h2>
      <ul>
        <li>株式会社OPTiM R&Dチーム 2-weeks</li>
      </ul>
    </div>
  );
}

export default App;
