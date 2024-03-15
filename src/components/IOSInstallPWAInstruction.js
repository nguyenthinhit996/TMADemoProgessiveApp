import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";

const steps = [
  {
    title: "In Safari, click the 'share' button",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtKk_Q17k011vn9MfU9XQfPiGu1DS-ZgfXw&usqp=CAU",
  },
  {
    title: "Click 'Add to Home Screen'",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtKk_Q17k011vn9MfU9XQfPiGu1DS-ZgfXw&usqp=CAU",
  },
  {
    title: "Review settings and click 'Add'",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtKk_Q17k011vn9MfU9XQfPiGu1DS-ZgfXw&usqp=CAU",
  },
  {
    title: "Launch app from home screen'",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtKk_Q17k011vn9MfU9XQfPiGu1DS-ZgfXw&usqp=CAU",
  },
];

const IOSInstallPWAInstruction = () => {
  return (
    <Box
      sx={{
        p: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Box
        sx={{
          py: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          How to download Progressive Web App
        </Typography>
        <p>For IOS phone, please download Progressive Web App to continue</p>
      </Box>
      <Grid container spacing={2}>
        {steps.map((step, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Step {index + 1}: {step.title}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="200"
                  image={step.image}
                  alt={step.title}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default IOSInstallPWAInstruction;
