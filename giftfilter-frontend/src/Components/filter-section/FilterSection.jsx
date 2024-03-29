import React from "react";
import styles from "./Filter.module.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MultiselectCard from "./MultiselectCard";
import {
  ageList,
  genderList,
  ocassionList,
  priceList,
} from "../../constants/filterCategoryLists";
import { Button } from "@mui/material";

const FilterSection = () => {
  const [gender, setGender] = React.useState("male");
  const [age, setAge] = React.useState(30);
  const [ocassion, setOccasion] = React.useState(30);
  const [price, setPrice] = React.useState(45);
  const handleFilter = () => {
    const object = {
      gender,
      age,
      ocassion,
      price,
    };
    console.log(object);
  };
  return (
    <Box component="main" className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <MultiselectCard
              title="Gender"
              value={gender}
              setValue={setGender}
              list={genderList}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <MultiselectCard
              title="Age"
              value={age}
              setValue={setAge}
              list={ageList}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <MultiselectCard
              title="Occasion"
              value={ocassion}
              setValue={setOccasion}
              list={ocassionList}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <MultiselectCard
              title="Price"
              value={price}
              setValue={setPrice}
              list={priceList}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        sx={{
          marginTop: "20px",
          width: 200,
          height: 40,
          background: "#E23E57",
        }}
        onClick={handleFilter}
        variant="contained"
        color="error"
      >
        filter
      </Button>
    </Box>
  );
};

export default FilterSection;
