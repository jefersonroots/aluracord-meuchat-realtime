import React from "react";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import { useRouter } from "next/router";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: orange;
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

// // Componente React
// function HomePage() {
//   // JSX
//   return (
//     <div>
//       <GlobalStyle />
//       <Titulo tag="h2"> Boas vindas de volta!!</Titulo>
//       <h2> Discord - Alura Matrix</h2>
//       <style jsx>
//         {`
//           h2 {
//             color: ${appConfig.theme.colors.neutrals["200"]};
//           }
//         `}
//       </style>
//     </div>
//   );
// }
// export default HomePage;

export default function PaginaInicial() {
  // const username = "JefersonRoots";
  const [username, setUsername] = React.useState("JefersonRoots");
  const roteamento = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://lfrfu3w8vyl1p3bai347o9xv-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Frequently-Asked-Questions-on-Blockchain-Answered-by-Expert-Jordan-Lindsey-1280x640.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply"
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row"
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700]
          }}
        >
          {/* Formul??rio */}
          <Box
            as="form"
            onSubmit={function (infEvent) {
              infEvent.preventDefault();
              console.log("Submetido o form.");
              roteamento.push("/chat");
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px"
            }}
          >
            <Titulo tag="h2">BEM VINDO!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300]
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              value={username}
              onChange={function (event) {
                console.log("digitou:", event.target.value);
                //onde esta o valor?
                // const contDigitacao = event.target.value;
                // const contador = 1;
                const valor = event.target.value;
                //trocando os valores de variavei atrav??s do react e avisando quem precisa
                setUsername(valor);

                // if (contDigitacao < 2) {
                //   console.log("Menos de 2 ", contDigitacao.width);
                // } else {
                //   console.log("contando", event.target.value);
                // }
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[200],
                  fontWeight: "bold"
                }
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["E3F9E5"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
                fontWeight: "bold"
              }}
            />
          </Box>
          {/* Formul??rio */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px"
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px"
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px"
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
