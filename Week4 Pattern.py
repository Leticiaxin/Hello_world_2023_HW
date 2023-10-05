import turtle
import random

# Set up the turtle screen
screen = turtle.Screen()
#the background color 
screen.title("Leticia's pattern")


# Create a turtle
me = turtle.Turtle()
me.speed(0)#muxium spped for darwing 
me.penup()
turtle.colormode(255)#rgb

# I try to ceate a gradent background, but it doesen't work..
def draw_gradient():
    for y in range(-300, 301):
        color = (0, 0, y % 256)
        screen.bgcolor(color)
        screen.update()

# Define the number of circles and iterations
num_circles = 10
iterations = 10



# set the random colos of circles
def rgb():
    r = random.randint(0,255)
    b = random.randint(0,255)
    g = random.randint(0,255)
    return (r,g,b) # radom color for each time

# Function to draw a circle with random color
def draw_circle(size):
    color = rgb()
    me.color(color)
    me.begin_fill()
    me.circle(size)
    me.end_fill()
    me.left(140)
    me.forward(size)

# Loop to create generative art
for _ in range(iterations):
    for _ in range(num_circles):
        x = random.randint(-300, 300)
        y = random.randint(-300, 300)
        size = random.randint(10, 100)
        me.goto(x, y)
        draw_circle(size)

# Close the turtle graphics window on click
screen.exitonclick()
