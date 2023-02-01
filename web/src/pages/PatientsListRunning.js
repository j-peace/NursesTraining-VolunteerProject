import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import SimpleList from "../components/SimpleList";

function PatientsList() {
    return (
        <>
            <div style={{
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                width: '100%',
            }}>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </div>
            <div style={{
                padding: '16px',
                marginTop: '30px',
                height: '1500px',
            }}>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
                <p>Some text some text some text some text..</p>
            </div>

        </>
    )
}

export default PatientsList;