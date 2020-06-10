import React from 'react'

const Works: React.FC = () => {
  return (
    <div id="Works">
      <h2>Works</h2>
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
    </div>
  )
}

export default Works
