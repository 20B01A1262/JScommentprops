import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';

ReactDOM.render (
    <>
    <center>
    <table>
        <tr>
            <td>
            <Comment name="Siri" area = "United States" info = "Studying Btech Second year in SVECW in INDIA"  />
            </td>
            <td>
            <Comment  name = "Ruhi" area="Australia" info = "Studyiing MBA in Andhra University in INDIA"   />
            </td>
        </tr>
    </table>
    </center>
    </>,
    document.getElementById('root')
)