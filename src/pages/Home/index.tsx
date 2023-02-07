import { base64Encode } from "@firebase/util";
import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadingButtonMui from "../../components/LoadingButtom";
import PrimarySearchAppBar from "../../components/Menubar";
import MenubarAlternative from "../../components/MenubarAlternative";
import { OutsideContainer, OutsideGrid } from "../SignIn/style";
import { InsideContainer } from "./style";

interface IFormInput {
  documentId: string;
  number: number;
  series: number;
  supplierId: number;
  companyId: number;
  movementTypeId: number;
  movementDate: string;
  issueDate: string;
  notes: string;
}

export default function Home() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const URL = "http://localhost:5000/abacate";

  const formSubmitHandler: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    };

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <OutsideContainer>
      <MenubarAlternative></MenubarAlternative>
      <OutsideGrid>
        <InsideContainer>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <FormGroup>
                <FormControl margin="normal">
                  <InputLabel htmlFor="document-type">
                    Tipo de documento
                  </InputLabel>
                  <Input
                    id="document-type"
                    aria-describedby="document-type-text"
                    {...register("documentId", { required: true })}
                  />
                  <FormHelperText id="document-type-text">
                    Digite NF
                  </FormHelperText>
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="document-number">
                    Número do documento
                  </InputLabel>
                  <Input
                    id="document-number"
                    type="number"
                    {...register("number", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="series">Série</InputLabel>
                  <Input
                    id="series"
                    type="number"
                    {...register("series", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="supplier-id">Fornecedor</InputLabel>
                  <Input
                    id="supplier-id"
                    {...register("supplierId", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="company-id">Empresa</InputLabel>
                  <Input
                    id="company-id"
                    {...register("companyId", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="moviment-type">
                    Tipo de movimento
                  </InputLabel>
                  <Input
                    id="moviment-type"
                    {...register("movementTypeId", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="movement-date">
                    Data de movimento
                  </InputLabel>
                  <Input
                    id="movement-date"
                    {...register("movementDate", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="issue-date">Data de emissão</InputLabel>
                  <Input
                    id="issue-date"
                    {...register("issueDate", { required: true })}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <InputLabel htmlFor="notes">Notas Adicionais</InputLabel>
                  <Input
                    id="notes"
                    {...register("notes", { required: true })}
                  />
                </FormControl>
                <LoadingButtonMui
                  loading={false}
                  type="submit"
                  variant="contained"
                  sx={{
                    py: "0.8rem",
                    mt: 2,
                    width: "80%",
                    marginInline: "auto",
                  }}
                >
                  {" "}
                  Lançar Nota
                </LoadingButtonMui>
              </FormGroup>
            </form>
        </InsideContainer>
      </OutsideGrid>
    </OutsideContainer>
  );
}
