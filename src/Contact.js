import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Contact.css";

const reasons = [
  {
    value: "None",
    label: "Reaching out",
  },
  {
    value: "Question",
    label: "General questions",
  },
  {
    value: "Job",
    label: "Job opportunity",
  },
  {
    value: "Help",
    label: "Help request",
  },
];

function Contact() {
  const [reason, setReason] = React.useState("None");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div>
      <div id="nav-contact" className="menu-anchor"></div>
      <Container fixed>
        <h1>
          <ContactMailIcon
            className="header-icon"
            sx={{ width: 32, height: 32 }}
          />
          Contact
        </h1>
        <LinearProgress color="secondary" />
        <Card>
          <CardContent>
            <FormControl>
              <form
                target="_blank"
                action="https://formsubmit.co/eed11ad6af080e76769ce1de285ce911"
                method="POST"
              >
                <TextField
                  id="form-name"
                  name="name"
                  label="Name"
                  type="text"
                  variant="filled"
                  required={true}
                />
                <TextField
                  id="form-email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  required={true}
                />
                <TextField
                  id="form-reason"
                  name="reason"
                  select
                  label="Contact Reason"
                  value={reason}
                  onChange={handleReasonChange}
                  variant="filled"
                  required={true}
                >
                  {reasons.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="form-message"
                  name="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={7}
                  required={true}
                />
                <div>
                  <input
                    type="hidden"
                    name="_subject"
                    value="Online Portfolio Feedback"
                  ></input>
                  <input type="hidden" name="_template" value="box"></input>
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Thanks for contacting me. I will be in touch as soon as possible!"
                  ></input>
                  <input
                    type="text"
                    name="_honey"
                    id="contactFormHoney"
                  ></input>
                </div>
                <div>
                  <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </FormControl>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
