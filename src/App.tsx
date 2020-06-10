import React from 'react';
import logo from './logo.svg';
import './App.css';
import Access from './components/Access'
import Affiliations from './components/Affiliations'
import Events from './components/Events'

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
      <h2 id="works">Works</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Year  </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://github.com/tanacchi/rogue_game"
              >
                rogue_game
              </a>
            </td>
            <td>ターミナル上で動くRPGゲーム</td>
            <td>2018 ~</td>
          </tr>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://github.com/jphacks/FK_1906"
              >
                FK_1906
              </a>
            </td>
            <td>プレゼンスキルの数値化ツール</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://github.com/tanacchi/lisp_in_python"
              >
                lisp_in_python
              </a>
            </td>
            <td>Lisp インタプリタ in Python</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://github.com/tanacchi/python_tanaline"
              >
                python_tanaline
              </a>
            </td>
            <td>新入生教育用LINEボット</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://github.com/CIR-KIT/fifth_robot_pkg"
              >
                fifth_robot_pkg
              </a>
            </td>
            <td>自律移動ロボット(CIR-KIT5号機)</td>
            <td>2016 ~ 2018</td>
          </tr>
          <tr>
            <td>Hello Idea</td>
            <td>アイデア創出プラットフォーム</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>
              <a
                className="App-link"
                href="https://qr-official.line.me/sid/L/682dslrg.png"
              >
                tanakinator
              </a>
            </td>
            <td>LINE Bot で動作するアキネーター</td>
            <td>2020</td>
          </tr>
        </tbody>
      </table>

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
