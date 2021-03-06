import React from 'react'

const Skills: React.FC = () => {
  return (
    <div id="Skills">
      <h2>Skills</h2>
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
            <td>Machine Learing</td>
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
            <td>Scheme</td>
            <td>趣味程度</td>
          </tr>
          <tr>
            <td>Vue.js</td>
            <td>サークル内サービス</td>
          </tr>
          <tr>
            <td>React</td>
            <td>ポートフォリオ作成</td>
          </tr>
          <tr>
            <td>Rust</td>
            <td>Hello World</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Skills
