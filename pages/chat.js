import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import react from 'react';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui
const [mensagem, setMensagem] = React.useState('');
const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
    // ./Sua lógica vai aqui
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'M-elida',
            texto: novaMensagem,
        };
        setListaDeMensagens([
            mensagem,
            ... listaDeMensagens,
            
        ]);
        setMensagem('');
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://i.gifer.com/G4mC.gif)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    border: '1px solid',
                    borderColor: appConfig.theme.colors.neutrals[999],
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    opacity: '0.9',
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%', 
                        border: '1px solid',
                        borderColor: appConfig.theme.colors.neutrals[999],
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} /> 
                   {/*{listaDeMensagens.map((mensagemAtual) => {
                       return  (
                           <li key={mensagemAtual.id}>
                               {mensagemAtual.de}: {mensagemAtual.texto}
                           </li>
                       )
                    })} */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                 if(event.key === 'Enter') {
                                 event.preventDefault();
                                 handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[300],
                                focus: {
                                    border: '1px solid',
                                    borderColor: appConfig.theme.colors.neutrals[999],
                                }
                            }}
                            
                        />
                        <Button
                type='submit'
                label='Enviar'
                fullWidth
                onClick={(evento) => {
                    
                    evento.preventDefault();
                    handleNovaMensagem(mensagem);
                  }}
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.neutrals[999],
                }}
                styleSheet={{
                    width: '75px',
                    height: '42px',
                    position: 'relative',
                    top: "0",
                    transform: 'translate(0,-5px)',
                    margin: '0 5px',
                }}
              />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                Welcome to chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    iconName="FaSignOutAlt"
                    href="/"
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals[999],
                        mainColor: appConfig.theme.colors.neutrals[300],
                        mainColorLight: appConfig.theme.colors.neutrals[900],
                        mainColorStrong: appConfig.theme.colors.primary[600],
                      }}
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props.listaDeMensagens);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflowY: 'scroll',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals[300],
                marginBottom: '16px',
                
            }}
        >
             {props.mensagens.map((mensagem) => {
                 return (
             <Text
                key={mensagem.id}
                tag="li"
                styleSheet={{
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }
                }}
            >
                <Box
                    styleSheet={{
                        marginBottom: '8px',
                    }}
                >
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                        src={`https://avatars.githubusercontent.com/u/91353872?v=4`}
                    />
                    <Text tag="strong"
                    
                     styleSheet={{
                        
                        color: appConfig.theme.colors.neutrals[300],
                    }}
                    >
                    
                        {mensagem.de}
                         
                    </Text>
                    <Text
                        styleSheet={{
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.theme.colors.neutrals[900],
                        }}
                        tag="span"
                    >
                
                        {(new Date().toLocaleTimeString('pt-BR'))}
                    </Text>
                </Box>    
                {mensagem.texto}
                
            </Text>
                 );

             })}
        </Box>
    )
}