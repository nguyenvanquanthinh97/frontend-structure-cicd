import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Badge,
  Rating,
  Box,
  Fab,
} from "@mui/material";
import {
  Home,
  ShoppingCart,
  Login,
  Logout,
  AddShoppingCart,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { sendLogoutRequest } from "../../store/authActions";
import { useNavigate } from "react-router";

const ShopHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const [cartCount, setCartCount] = useState(0);

  const handleSignInOut = () => {
    if (isSignedIn) {
      return dispatch(sendLogoutRequest());
    }
    navigate("/login");
  }

  const handleAddToCart = (productId) => {
    if (isSignedIn) {
      setCartCount(prev => prev + 1);
    }
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Desk Lamp",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Wireless Mouse",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Phone Case",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=300&fit=crop",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#fff", color: "primary.main", boxShadow: 1 }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <Home />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            Shop Hub
          </Typography>

          {isSignedIn && (
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}

          <Button
            variant="outlined"
            color="inherit"
            startIcon={isSignedIn ? <Logout /> : <Login />}
            onClick={handleSignInOut}
            sx={{ borderRadius: 2 }}
          >
            {isSignedIn ? "Sign Out" : "Sign In"}
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Container
        maxWidth={false} // Remove maxWidth constraint
        sx={{
          mt: 8,
          mb: 8,
          px: 0,
          maxWidth: "2000px", // Optional: set a very large max-width if you want some limit
          mx: "auto", // Center the container
        }}
      >
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mb: 2,
            }}
          >
            Welcome to Shop Hub
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Discover Amazing Products
          </Typography>
        </Box>

        <Grid
          container
          spacing={0}
          sx={{
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6, lg: 8 }, // Move padding to Grid container
          }}
        >
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={product.id}
              sx={{
                p: 2, // Consistent padding for grid items
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddShoppingCart />}
                    disabled={!isSignedIn}
                    onClick={handleAddToCart}
                    sx={{
                      borderRadius: 2,
                      py: 1,
                    }}
                  >
                    {isSignedIn ? "Add to Cart" : "Sign in to Add"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {isSignedIn && (
        <Fab
          color="primary"
          aria-label="cart"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            boxShadow: 3,
          }}
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCart />
          </Badge>
        </Fab>
      )}
    </Box>
  );
};

export default ShopHomepage;
