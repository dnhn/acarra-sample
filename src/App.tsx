import {
  Backdrop,
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import './App.scss';

export default function App() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('body');
  const handleOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => setOpen(false);

  const backdrop = () => (
    <Backdrop open={open} sx={{ bgcolor: 'transparent' }} />
  );

  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Container className="flex h-screen items-center justify-center">
      <Button variant="contained" onClick={handleOpen('body')}>
        Open
      </Button>

      <Dialog
        open={open}
        scroll={scroll}
        slots={{
          backdrop: backdrop,
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className="tracking-[-0.3px]"
      >
        <DialogTitle
          id="dialog-title"
          className="flex justify-between bg-[#262626] py-4 px-6 text-white sm:items-center sm:py-8 sm:px-10"
        >
          <Typography fontWeight={700} className="text-[25px] sm:text-[26px]">
            Choose the form of payment
          </Typography>
          <Button
            aria-label="Close"
            onClick={handleClose}
            className="h-11 w-11 min-w-0 p-0 text-white"
          >
            <svg className="h-4 w-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.204594 0.422662L0.305628 0.305628C0.676086 -0.0648301 1.25579 -0.0985079 1.66429 0.204594L1.78133 0.305628L8 6.52383L14.2187 0.305628C14.6262 -0.101876 15.2869 -0.101876 15.6944 0.305628C16.1019 0.713131 16.1019 1.37383 15.6944 1.78133L9.47617 8L15.6944 14.2187C16.0648 14.5891 16.0985 15.1688 15.7954 15.5773L15.6944 15.6944C15.3239 16.0648 14.7442 16.0985 14.3357 15.7954L14.2187 15.6944L8 9.47617L1.78133 15.6944C1.37383 16.1019 0.713131 16.1019 0.305628 15.6944C-0.101876 15.2869 -0.101876 14.6262 0.305628 14.2187L6.52383 8L0.305628 1.78133C-0.0648301 1.41087 -0.0985079 0.831165 0.204594 0.422662L0.305628 0.305628L0.204594 0.422662Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </DialogTitle>
        <DialogContent className="py-4 px-6 sm:px-10 sm:py-8">
          <Box className="flex items-center justify-between rounded-[10px] border-solid border-[#d3dee9] bg-[#f7fafc] p-4 sm:rounded-[20px] sm:p-6">
            <Box className="flex items-center justify-between gap-5">
              <Typography className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#edf2f7] text-[20px] font-bold capitalize sm:h-[70px] sm:w-[70px] sm:text-[26px]">
                J
              </Typography>
              <Box>
                <Typography
                  component="h3"
                  fontWeight={600}
                  className="text-[20px] sm:text-[26px]"
                >
                  John
                </Typography>
                <Typography
                  color="#718096"
                  fontWeight={500}
                  className="max-sm:text-[13px] sm:pt-2"
                >
                  (88) 99602-2404
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              className="rounded-[10px] border-0 bg-[#edf2f7] font-semibold normal-case text-[#262626] max-sm:text-[13px]"
            >
              Log out
            </Button>
          </Box>
          <Box>
            <Typography
              component="h3"
              fontWeight={600}
              className="mt-6 mb-5 text-[20px] sm:mt-[30px] sm:mb-5 sm:text-[22px]"
            >
              Selected service
            </Typography>
            <Box className="flex justify-between rounded-[10px] border-solid border-[#d3dee9] bg-white p-[18px] sm:rounded-[20px] sm:p-6">
              <Box className="mr-3 flex items-center sm:mr-5">
                <img
                  src="https://unsplash.it/100/80"
                  alt=""
                  className="h-[60px] w-[60px] rounded-xl object-cover object-center sm:h-[70px] sm:w-[70px]"
                />
              </Box>
              <Box className="flex flex-1 max-sm:flex-col sm:justify-between gap-3">
                <Box>
                  <Typography
                    component="h4"
                    fontWeight={600}
                    className="text-[15px] sm:text-[22px]"
                  >
                    Japanese Lessons
                  </Typography>
                  <Typography
                    component="p"
                    fontWeight={500}
                    className="mt-2 text-[10px] text-[#718096] sm:mt-4 sm:text-sm"
                  >
                    <svg
                      className="mr-3"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.818 1.27273H10.1816V0.636364C10.1816 0.467589 10.1146 0.305728 9.99525 0.186387C9.87591 0.0670452 9.71404 0 9.54527 0C9.3765 0 9.21463 0.0670452 9.09529 0.186387C8.97595 0.305728 8.90891 0.467589 8.90891 0.636364V1.27273H3.818V0.636364C3.818 0.467589 3.75095 0.305728 3.63161 0.186387C3.51227 0.0670452 3.35041 0 3.18163 0C3.01286 0 2.851 0.0670452 2.73166 0.186387C2.61232 0.305728 2.54527 0.467589 2.54527 0.636364V1.27273H1.90891C1.40259 1.27273 0.917001 1.47386 0.558977 1.83189C0.200953 2.18991 -0.000183105 2.6755 -0.000183105 3.18182V12.0909C-0.000183105 12.5972 0.200953 13.0828 0.558977 13.4408C0.917001 13.7989 1.40259 14 1.90891 14H10.818C11.3243 14 11.8099 13.7989 12.1679 13.4408C12.526 13.0828 12.7271 12.5972 12.7271 12.0909V3.18182C12.7271 2.6755 12.526 2.18991 12.1679 1.83189C11.8099 1.47386 11.3243 1.27273 10.818 1.27273ZM11.4544 12.0909C11.4544 12.2597 11.3873 12.4215 11.268 12.5409C11.1486 12.6602 10.9868 12.7273 10.818 12.7273H1.90891C1.74013 12.7273 1.57827 12.6602 1.45893 12.5409C1.33959 12.4215 1.27254 12.2597 1.27254 12.0909V6.36364H11.4544V12.0909ZM11.4544 5.09091H1.27254V3.18182C1.27254 3.01304 1.33959 2.85118 1.45893 2.73184C1.57827 2.6125 1.74013 2.54545 1.90891 2.54545H2.54527V3.18182C2.54527 3.35059 2.61232 3.51245 2.73166 3.63179C2.851 3.75114 3.01286 3.81818 3.18163 3.81818C3.35041 3.81818 3.51227 3.75114 3.63161 3.63179C3.75095 3.51245 3.818 3.35059 3.818 3.18182V2.54545H8.90891V3.18182C8.90891 3.35059 8.97595 3.51245 9.09529 3.63179C9.21463 3.75114 9.3765 3.81818 9.54527 3.81818C9.71404 3.81818 9.87591 3.75114 9.99525 3.63179C10.1146 3.51245 10.1816 3.35059 10.1816 3.18182V2.54545H10.818C10.9868 2.54545 11.1486 2.6125 11.268 2.73184C11.3873 2.85118 11.4544 3.01304 11.4544 3.18182V5.09091Z"
                        fill="currentColor"
                      />
                    </svg>
                    Dec 2, 2020 · 11:00 · 1 month
                  </Typography>
                  <Typography
                    component="p"
                    fontWeight={500}
                    className="mt-1 text-[10px] text-[#718096] sm:text-sm"
                  >
                    <svg className="mr-3" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.2489 1.7344C9.12301 0.623882 7.59595 -1.17012e-08 6.00367 0C4.4114 1.17012e-08 2.88434 0.623882 1.75844 1.7344C0.632528 2.84492 1.18634e-08 4.3511 0 5.92161C-1.18634e-08 7.49212 0.632528 8.99831 1.75844 10.1088L5.48717 13.7936C5.55295 13.859 5.6312 13.9109 5.71742 13.9463C5.80364 13.9818 5.89612 14 5.98952 14C6.08293 14 6.17541 13.9818 6.26163 13.9463C6.34785 13.9109 6.4261 13.859 6.49188 13.7936L10.2489 10.0739C11.3701 8.96803 12 7.46813 12 5.90417C12 4.3402 11.3701 2.8403 10.2489 1.7344ZM9.23713 9.07598L6.00367 12.2792L2.77022 9.07598C2.13141 8.44533 1.69651 7.64203 1.52049 6.76763C1.34446 5.89323 1.43522 4.98699 1.78129 4.16346C2.12736 3.33993 2.7132 2.63608 3.46476 2.14089C4.21632 1.6457 5.09985 1.38141 6.00367 1.38141C6.9075 1.38141 7.79103 1.6457 8.54259 2.14089C9.29415 2.63608 9.87999 3.33993 10.2261 4.16346C10.5721 4.98699 10.6629 5.89323 10.4869 6.76763C10.3108 7.64203 9.87594 8.44533 9.23713 9.07598Z"
                        fill="currentColor"
                      />
                    </svg>
                    Client’s place
                  </Typography>
                </Box>
                <Typography
                  fontWeight={600}
                  className="text-[15px] max-sm:mt-1 sm:text-[22px]"
                >
                  Rp 1.350.000
                </Typography>
              </Box>
            </Box>
            <label htmlFor="email">
              <Typography
                component="h3"
                fontWeight={600}
                className="mt-6 mb-5 text-[15px] sm:mt-[30px] sm:mb-5 sm:text-[22px]"
              >
                Enter your location
              </Typography>
            </label>
            <TextField
              id="email"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="Enter address"
              className="placeholder:text-[#d3dee9]"
            />
            <label htmlFor="note">
              <Typography
                component="h3"
                fontWeight={600}
                className="mt-6 mb-5 text-[15px] sm:mt-[30px] sm:mb-5 sm:text-[22px]"
              >
                Note (optional)
              </Typography>
            </label>
            <TextField
              id="note"
              fullWidth
              variant="outlined"
              placeholder="Enter text here"
              className="placeholder:text-[#d3dee9]"
            />
            <Typography
              component="h3"
              fontWeight={700}
              className="my-6 text-2xl sm:my-9 sm:text-4xl"
            >
              Choose a way to pay
            </Typography>
            <FormControl className="w-full">
              <RadioGroup
                name="payment"
                row
                className="RadioGroup flex items-center gap-[10px] max-sm:flex-wrap sm:gap-3"
              >
                <FormGroup className="max-sm:flex-[50%] sm:flex-1">
                  <Radio id="cash" value="cash" />
                  <label
                    htmlFor="cash"
                    className="static flex h-[60px] items-center justify-center rounded-xl border-2 border-solid border-[#edf2f7] bg-[#edf2f7] p-3 text-center text-lg font-semibold text-[#262626] max-sm:text-[15px] max-sm:leading-tight"
                  >
                    Cash
                  </label>
                </FormGroup>
                <FormGroup className="max-sm:flex-[50%] sm:flex-1">
                  <Radio id="credit" value="credit" />
                  <label
                    htmlFor="credit"
                    className="static flex h-[60px] items-center justify-center rounded-xl border-2 border-solid border-[#edf2f7] bg-[#edf2f7] p-3 text-center text-lg font-semibold text-[#262626] max-sm:text-[15px] max-sm:leading-tight"
                  >
                    Credit card
                  </label>
                </FormGroup>
                <FormGroup className="max-sm:flex-[50%] sm:flex-1">
                  <Radio id="wallet" value="wallet" />
                  <label
                    htmlFor="wallet"
                    className="static flex h-[60px] items-center justify-center rounded-xl border-2 border-solid border-[#edf2f7] bg-[#edf2f7] p-3 text-center text-lg font-semibold text-[#262626] max-sm:text-[15px] max-sm:leading-tight"
                  >
                    eWallet/
                    <br className="sm:hidden" />
                    Virtual bank
                  </label>
                </FormGroup>
              </RadioGroup>
            </FormControl>
            <Box>
              <FormGroup className="mt-10">
                <FormControlLabel
                  control={<Checkbox />}
                  label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`}
                  className="LabelCheck text-[#718096]"
                />
              </FormGroup>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className="flex items-center justify-between border-x-0 border-t border-b-0 border-solid border-t-[#d3dee9] py-4 px-6 sm:px-10 sm:py-8">
          <Button
            onClick={handleClose}
            variant="text"
            className="px-0 text-[15px] normal-case text-[#262626] sm:text-base"
          >
            Previous
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            className="w-36 rounded-md py-3 text-[15px] normal-case sm:rounded-xl sm:py-4 sm:text-lg"
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
